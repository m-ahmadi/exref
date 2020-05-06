import jstree from './jstree/jstree.js';

export default { init }

async function init(instruments) {
	const root = $('.combo');
	root.html(`
		<input type="text" required class="uk-input" />
		<ul class="hide"></ul>
		<span class="x-btn hide">✖</span>
		<svg class="filter-btn" viewBox="0 0 102 102"><path d="M3,3 H99 L62,58 V89 L40,99 V58 L3,3 Z" /></svg>
		<div class="filter-box slide-off"></div>
	`);
	
	const data = instruments
		.map(i => ({
			Symbol:  cleanFa(i.Symbol),
			Name:    cleanFa(i.Name),
			YVal:    i.YVal,
			Flow:    i.Flow,
			CSecVal: i.CSecVal.trim()
		}))
		.sort((a,b) => a.Symbol.localeCompare(b.Symbol, 'fa'));
	
	const worker = new Worker('js/datable/combo.worker.js');
	worker.onmessage = function (e) {
		ul.html(e.data);
	};
	worker.postMessage({type:'init', rawData: data});
	
	const input      = $('> input:first-child', root);
	const ul         = $('> ul:nth-child(2)', root);
	const xBtn       = $('> span.x-btn', root);
	const filterBtn  = $('> svg.filter-btn', root);
	const $filterBox = $('> div.filter-box', root);
	const [cFocus, cHide, cSlideOff] = ['focus', 'hide', 'slide-off'];
	let i = -1, uSelect, filterBoxOpened;
	
	const treeData = await jstree.init($filterBox, instruments);
	const tree = $filterBox.jstree(true); // jstree instance
	xBtn._show = () => xBtn.removeClass(cHide);
	xBtn._hide = () => xBtn.addClass(cHide);
	
	$filterBox.on('changed.jstree', function (e, _data) {
		// el.jstree('rename_node', '1', 'new text')
		const { selected, node } = _data;
		open();
		search( input.val(), ...getFilters(selected) );
	});
	
	ul // focus on mouse move and select item on mousedown
	.on('mouseenter', 'li', function () {
		$('li', ul).removeClass(cFocus);
		i = $(this).addClass(cFocus).index();
	})
	.on('mouseleave', 'li', function () {
		$(this).removeClass(cFocus);
	})
	.on('mousedown', 'li', function ({which}) {
		select( $(this).data('val') );
		xBtn._show();
	});
	
	input // open/close on focus/blur, nav on up/down arrow, select on enter, clear on esc, change ul on input.
	.on('blur', close)
	.on('focus', open)
	.on('input', debounce(function () {
		i = -1;
		const v = this.value;
		const len = v.length;
		if ( isClosed() ) open();
		if (v === '') {
			xBtn._hide();
			search( undefined, ...getFilters(tree.get_selected()) );
			scrollTo( $('li:first-child', ul)[0] );
		} else if (len > 0) {
			xBtn._show();
			if (len > 1) {
				search( v, ...getFilters(tree.get_selected()) );
			}
		}
	}, 100))
	.on('keydown', function (e) {
		const key = e.which;
		if (key !== 38 && key !== 40 && key !== 13 && key !== 27) return;
		if (key === 13) { // enter
			select( $('li.focus', ul).data('val') );
			xBtn._show();
			return;
		} else if (key === 27) { // esc
			uSelect = undefined;
			input.val('').trigger('input');
			return;
		} else if (key === 38 || key === 40) { // 38=up 40=down
			const lis = $('li', ul);
			const inc = key === 38 ? -1 : key === 40 ? 1 : 0;
			i += inc;
			i = i > lis.length-1 ? 0 : i < 0 ? lis.length-1 : i;
			focus();
		}
	});
	
	// block input `blur` if clicks are on x,filter,tree (due to `mousedown` firing before `blur`)
	$('.combo')
		.on('mousedown', '> span.x-btn', prevent)
		.on('mousedown', '> svg.filter-btn', prevent)
		.on('mousedown', '> div.filter-box', prevent);
	
	$('body').on('click', function (e) {
		if ( !e.target.closest('.combo') ) close();
	});
	
	function select(v) {
		uSelect = v;
		input.val(v);
		close();
	}
	function focus() {
		scrollTo(  $('li', ul).removeClass(cFocus).eq(i).addClass(cFocus)[0]  );
	}
	function scrollTo(el) {
		if (el) el.scrollIntoView({block: 'nearest'});
	}
	function open() {
		i = -1;
		$('li', ul).removeClass(cFocus);
		if ( isClosed() ) ul.removeClass(cHide);
		if (uSelect) {
			i = $(`li[data-val="${uSelect}"]`, ul).index();
			focus();
		}
		if (filterBoxOpened) $filterBox.removeClass(cSlideOff)
	}
	function close(e) {
		if ( !isClosed() ) ul.addClass(cHide);
		$filterBox.addClass(cSlideOff);
	}
	function isClosed() {
		return ul.hasClass(cHide);
	}
	
	const {a: FlowNodes, b: YValNodes, c: CSecValNodes} = treeData
		.map(i => ({id: i.id, root: tree.get_path(i.id, undefined, true)[0]}) )
		.reduce((a,c)=> a[c.root].push(c.id) && a, {a:[],b:[],c:[]});
	function getFilters(selection) {
		const [YValFilters, FlowFilters, CSecValFilters] = [[],[],[]];
		if (selection.length) {
			for (const id of selection) {
				if ( YValNodes.includes(id) ) {
					YValFilters.push(id);
				} else if ( FlowNodes.includes(id) ) {
					FlowFilters.push(id-100); // 100 was added for deconfliction
				} else if ( CSecValNodes.includes(id) ) {
					CSecValFilters.push(['01','02','XD'].includes(id) ? id : id-1000+''); // 1000 was added for deconfliction
				}
			}
		}
		return [YValFilters, FlowFilters, CSecValFilters];
	}
	
	function search(...args) {
		worker.postMessage(args);
	}
	function __search(query, YValFilters=[], FlowFilters=[], CSecValFilters=[]) {
		const ylen = YValFilters.length;
		const flen = FlowFilters.length;
		const clen = CSecValFilters.length;
		let predicate;
		if (query) {
			predicate = 
				ylen   && flen  && clen  ? i => `${i.Symbol} ${i.Name}`.includes(query) && YValFilters.includes(i.YVal) && FlowFilters.includes(i.Flow) && CSecValFilters.includes(i.CSecVal) :
				ylen   && flen  && !clen ? i => `${i.Symbol} ${i.Name}`.includes(query) && YValFilters.includes(i.YVal) && FlowFilters.includes(i.Flow) :
				ylen   && !flen && clen  ? i => `${i.Symbol} ${i.Name}`.includes(query) && YValFilters.includes(i.YVal) && CSecValFilters.includes(i.CSecVal) :
				!ylen  && flen  && clen  ? i => `${i.Symbol} ${i.Name}`.includes(query) && FlowFilters.includes(i.Flow) && CSecValFilters.includes(i.CSecVal) :
				ylen   && !flen && !clen ? i => `${i.Symbol} ${i.Name}`.includes(query) && YValFilters.includes(i.YVal) :
				!ylen  && flen  && !clen ? i => `${i.Symbol} ${i.Name}`.includes(query) && FlowFilters.includes(i.Flow) :
				!ylen  && !flen && clen  ? i => `${i.Symbol} ${i.Name}`.includes(query) && CSecValFilters.includes(i.CSecVal)  :
				!ylen  && !flen && !clen ? i => `${i.Symbol} ${i.Name}`.includes(query) : undefined;
		} else {
			predicate = 
				ylen   && flen  && clen  ? i => YValFilters.includes(i.YVal) && FlowFilters.includes(i.Flow) && CSecValFilters.includes(i.CSecVal) :
				ylen   && flen  && !clen ? i => YValFilters.includes(i.YVal) && FlowFilters.includes(i.Flow) :
				ylen   && !flen && clen  ? i => YValFilters.includes(i.YVal) && CSecValFilters.includes(i.CSecVal) :
				!ylen  && flen  && clen  ? i => FlowFilters.includes(i.Flow) && CSecValFilters.includes(i.CSecVal) :
				ylen   && !flen && !clen ? i => YValFilters.includes(i.YVal) :
				!ylen  && flen  && !clen ? i => FlowFilters.includes(i.Flow) :
				!ylen  && !flen && clen  ? i => CSecValFilters.includes(i.CSecVal)  :
				!ylen  && !flen && !clen ? 'none' : undefined;
		}
		const res = predicate === 'none' ? [] : data.filter(predicate);
		const rgx = new RegExp(escRgx(query), 'g');
		const replaceWith = `<span class="query">${query}</span>`;
		
		if (query) {
			res.sort(a => a.Symbol.includes(query) ? -1 : 1);
			res.sort(a => new RegExp(`^${query}$`).test(a.Symbol) ? -1 : 1);
		} else {
			res.sort((a,b) => a.Symbol.localeCompare(b.Symbol, 'fa'), );
		}
		
		const FlowNames = ['عمومی - مشترک بین بورس و فرابورس', 'بورس', 'فرابورس', 'آتی', 'پایه فرابورس', 'پایه فرابورس - منتشر نمی شود', 'بورس انرژی', 'بورس کالا'];
		ul.html(res.map(i => `
			<li data-val="${i.Symbol}">
				<div>${query ? i.Symbol.replace(rgx, replaceWith) : i.Symbol}</div>
				<div>${query ? i.Name.replace(rgx, replaceWith) : i.Name}</div>
				<div>${ FlowNames[i.Flow] }</div>
			</li>
		`).join(''));
	}
	
	filterBtn.on('click', function () {
		filterBoxOpened = !filterBoxOpened; // toggling
		$filterBox.toggleClass(cSlideOff);
	});
	
	
	xBtn.on('click', function () {
		input.val('').trigger('input');
	});
	search( undefined, ...getFilters(tree.get_selected()) );
}

function prevent(e) {
	e.preventDefault();
}

function escRgx(str='') {
	return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function cleanFa(str) {
	return str
		// .replace(/[\u200B-\u200D\uFEFF]/g, ' ')
		.replace(/\u200B/g, '')        // zero-width space
		.replace(/\s?\u200C\s?/g, ' ') // zero-width non-joiner
		.replace(/\u200D/g, '')        // zero-width joiner
		.replace(/\uFEFF/g, '')        // zero-width no-break space
		.replace(/ك/g,'ک')
		.replace(/ي/g,'ی');
}

function debounce(fn, wait) {
	let timeout
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => fn.apply(this, args), wait);
	};
}