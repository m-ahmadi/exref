(function () {
	'use strict';

	function Instrument(DEven) {
		const params = {
			t: 'Instrument',
			a: ''+DEven
		};
		return makeRequest(params);
	}

	function InstrumentAndShare(DEven, LastID=0) {
		const params = {
			t: 'InstrumentAndShare',
			a: ''+DEven,
			a2: ''+LastID
		};
		return makeRequest(params);
	}

	function LastPossibleDeven() {
		const params = {
			t: 'LastPossibleDeven'
		};
		return makeRequest(params);
	}

	function ClosingPrices(insCodes) {
		const params = {
			t: 'ClosingPrices',
			a: ''+insCodes
		};
		return makeRequest(params);
	}

	function makeRequest(params) {
		return $.ajax({
			url: 'http://service.tsetmc.com/tsev2/data/TseClient2.aspx',
			method: 'GET',
			data: params
		});
	}

	var rq = {
		Instrument,
		InstrumentAndShare,
		LastPossibleDeven,
		ClosingPrices
	};

	const i = parseInt;

	class Instrument$1 {
		constructor(_row='') {
			const row = _row.split(',');
			
			if (row.length !== 18) throw new Error('Invalid Instrument data!');

			// unspecified ones are all string
			this.InsCode      = row[0];  // int64 (long)
			this.InstrumentID = row[1];
			this.LatinSymbol  = row[2];
			this.LatinName    = row[3];
			this.CompanyCode  = row[4];
			this.Symbol       = row[5];
			this.Name         = row[6];
			this.CIsin        = row[7];
			this.DEven        = row[8];  // int32 (int)
			this.Flow         = i(row[9], 10);  // byte بازار
			this.LSoc30       = row[10]; // نام 30 رقمي فارسي شرکت
			this.CGdSVal      = row[11]; // A,I,O نوع نماد
			this.CGrValCot    = row[12]; // 00,11,1A,...25 کد گروه نماد
			this.YMarNSC      = row[13]; // NO,OL,BK,BY,ID,UI کد بازار
			this.CComVal      = row[14]; // 1,3,4,5,6,7,8,9 کد تابلو
			this.CSecVal      = row[15]; // []62 کد گروه صنعت
			this.CSoSecVal    = row[16]; // []177 کد زير گروه صنعت
			this.YVal         = row[17];
		}
	}

	let instruments, shares;
	let prices;

	async function init() {
		// prices = await $.get('data/ذوب.csv');
		// instruments = await $.get('data/instruments.csv');
		instruments = localStorage.getItem('sigman.instruments');
		shares = localStorage.getItem('sigman.shares');
		
		if (!instruments) {
			const res = await rq.InstrumentAndShare(0, 0);
			// TODO: check against bad requests
			const splitted = res.split('@');
			instruments = splitted[0];
			shares = splitted[1];
			localStorage.setItem('sigman.instruments', instruments);
			localStorage.setItem('sigman.shares', shares);
		}
		
		/* if (lastUpdate === 'never') {
			Promise.all([writeFile(insFile, ''), writeFile(sharesFile, '')]);
			lastDeven = 0;
			lastId = 0;
		} else {
			currentInstruments = await getInstruments();
			currentShares = await getShares(true);
			const insDevens = Object.keys(currentInstruments).map( k => parseInt(currentInstruments[k].match(/\b\d{8}\b/)[0]) );
			const shareIds = currentShares.map( i => parseInt(i.Idn) );
			lastDeven = Math.max.apply(Math, insDevens);
			lastId    = Math.max.apply(Math, shareIds);
		} */
	}

	function getInstruments(struct=false, arr=false) {
		const rows = instruments.split(';');
		const res = arr ? [] : {};
		for (const row of rows) {
			const item = struct ? new Instrument$1(row) : row;
			if (arr) {
				res.push(item);
			} else {
				res[ row.match(/^\d+\b/)[0] ] = item;
			}
		}
		return res;
	}

	function getPrices() {
		return csvParse(prices).slice(1).map(rowToObj);
	}

	var tse = { init, getInstruments, getPrices };

	const arr = [
		{ id: 'a',  parent: '#',  node: 'نوع بازار' },
		{ id: 0,    parent: 'a',  node: 'عمومی - مشترک بین بورس و فرابورس' },
		{ id: 1,    parent: 'a',  node: 'بورس' },
		{ id: 2,    parent: 'a',  node: 'فرابورس' },
		{ id: 3,    parent: 'a',  node: 'آتی' },
		{ id: 4,    parent: 'a',  node: 'پایه فرابورس' },
		{ id: 5,    parent: 'a',  node: 'پایه فرابورس - منتشر نمی شود' },
		{ id: 6,    parent: 'a',  node: 'بورس انرژی' },
		{ id: 7,    parent: 'a',  node: 'بورس کالا' },
		
		{ id: 'b',  parent: '#',  node: 'نوع نماد' },
		
		{ id: 'b1', parent: 'b',  node: 'سهام عادی' },
		{ id: 300,  parent: 'b1', node: 'سهام' },
		{ id: 303,  parent: 'b1', node: 'آتیسی' },
		{ id: 309,  parent: 'b1', node: 'پایه' },
		{ id: 307,  parent: 'b1', node: 'تسهیلات فرابورس' },
		{ id: 313,  parent: 'b1', node: 'شرکتهای کوچک و متوسط' },
		{ id: 304,  parent: 'b1', node: 'آتی' },
		{ id: 311,  parent: 'b1', node: 'اختیار خرید' },
		{ id: 312,  parent: 'b1', node: 'اختیار فروش' },
		
		{ id: 'b2', parent: 'b',  node: 'شاخص' },
		{ id: 68,   parent: 'b2', node: 'شاخص' },
		{ id: 69,   parent: 'b2', node: 'شاخص فرابورس' },
		{ id: 67,   parent: 'b2', node: 'شاخص قیمت' },
		
		{ id: 'b3', parent: 'b',  node: 'حق تقدم' },
		{ id: 400,  parent: 'b3', node: 'حق تقدم سهم' },
		{ id: 404,  parent: 'b3', node: 'حق تقدم پایه' },
		{ id: 403,  parent: 'b3', node: 'حق تقدم آتیسی' },
		
		{ id: 'b4', parent: 'b',  node: 'اوراق مشاركت'},
		{ id: 306,  parent: 'b4', node: 'اوراق مشارکت آتیسی' },
		{ id: 208,  parent: 'b4', node: 'اوراق صكوك' },
		{ id: 706,  parent: 'b4', node: 'صکوک اختصاصی', alias: [70] },
		{ id: 200,  parent: 'b4', node: 'اوراق مشارکت انرژی' },
		{ id: 207,  parent: 'b4', node: 'اوراق مشارکت ارز صادراتی' },
		{ id: 301,  parent: 'b4', node: 'اوراق مشارکت' },
		{ id: 308,  parent: 'b4', node: 'اوراق مشارکت کالا' },
		
		{ id: 'b5', parent: 'b',  node: 'صندوق سرمایه گذاری' },
		{ id: 305,  parent: 'b5', node: 'صندوق سرمایه گذاری در سهام بورس' },
		{ id: 315,  parent: 'b5', node: 'صندوق سرمایه گذاری قابل معامله انرژی' },
		
		{ id: 'b6', parent: 'b',  node: 'اختیار' },
		{ id: 322,  parent: 'b6', node: 'اختیار خ اخزا (اسناد خزانه داری اسلامی)' },
		{ id: 323,  parent: 'b6', node: 'اختیارف اخزا (اسناد خزانه داری اسلامی)' },
		{ id: 321,  parent: 'b6', node: 'اختیار فولاد هرمزگان' },
		{ id: 601,  parent: 'b6', node: 'اختیار فروش تبعی (ذوب آهن اصفهان)' },
		{ id: 600,  parent: 'b6', node: 'اختیار فروش تبعی' },
		{ id: 602,  parent: 'b6', node: 'اختیار فروش تبعی فرابورس' },
		
		{ id: 903,  parent: 'b',  node: 'دارایی فکری' },
		{ id: 701,  parent: 'b',  node: 'گواهی سپرده کالایی' },
		{ id: 901,  parent: 'b',  node: 'انرژی', alias: [902] },
		{ id: 801,  parent: 'b',  node: 'سلف بورس انرژی', alias: [802,803,804] },
		
		{ id: 263,  parent: 'b',  node: 'سبد قابل معامله در بورس' },
		{ id: 302,  parent: 'b',  node: 'سبد مشاع' },
		{ id: 248,  parent: 'b',  node: 'گواهی خرید سهام' },
		{ id: 500,  parent: 'b',  node: 'جایزه سهم' },
		
		
		{ id: 'c',  parent: '#',  node: 'گروه صنعت' },
		{ id: '01', parent: 'c',  node: 'زراعت و خدمات وابسه' },
		{ id: '02', parent: 'c',  node: 'جنگلداری و ماهیگیری' },
		{ id: 10,   parent: 'c',  node: 'استخراج زغال سنگ' },
		{ id: 11,   parent: 'c',  node: 'استخراج نفت، گاز و خدمات جنبی جز اکشتاف' },
		{ id: 13,   parent: 'c',  node: 'استخراج کانه های فلزی' },
		{ id: 14,   parent: 'c',  node: 'استخراج سایر معادن' },
		{ id: 17,   parent: 'c',  node: 'منسوجات' },
		{ id: 19,   parent: 'c',  node: 'دباغی، پرداخت چرم و ساخت انواع پاپوش' },
		{ id: 20,   parent: 'c',  node: 'محصولات چوبی' },
		{ id: 21,   parent: 'c',  node: 'محصولات کاغذی' },
		{ id: 22,   parent: 'c',  node: 'انتشار، چاپ و تکثیر' },
		{ id: 23,   parent: 'c',  node: 'فرآورده های نفتی، کک و سوخته هسته ای' },
		{ id: 25,   parent: 'c',  node: 'لاستیک و پلاستیک' },
		{ id: 26,   parent: 'c',  node: 'تولید محصولات کامپیوتری، الکترونیکی و نوری' },
		{ id: 27,   parent: 'c',  node: 'فلزات اساسی' },
		{ id: 28,   parent: 'c',  node: 'ساخت محصولات فلزی' },
		{ id: 29,   parent: 'c',  node: 'ماشین آلات و تجهیزات' },
		{ id: 31,   parent: 'c',  node: 'ماشین آلات و دستگاه های برقی' },
		{ id: 32,   parent: 'c',  node: 'ساخت دستگاه ها و وسایل ارتباطی' },
		{ id: 33,   parent: 'c',  node: 'ابزار پزشکی، اپتیکی و اندازه گیری' },
		{ id: 34,   parent: 'c',  node: 'خودرو و ساخت قطعات' },
		{ id: 35,   parent: 'c',  node: 'سایر تجهیزات حمل و نقل' },
		{ id: 36,   parent: 'c',  node: 'مبلمان و مصنوعات دیگر' },
		{ id: 38,   parent: 'c',  node: 'قند و شکر' },
		{ id: 39,   parent: 'c',  node: 'شرکت های چند رشته ای صنعتی' },
		{ id: 40,   parent: 'c',  node: 'عرضه برق، گاز، بخار و آب گرم' },
		{ id: 42,   parent: 'c',  node: 'محصولات غذایی و آشامیدنی به جز قند و شکر' },
		{ id: 43,   parent: 'c',  node: 'مواد و محصولات دارویی' },
		{ id: 44,   parent: 'c',  node: 'محصولات شیمیایی' },
		{ id: 45,   parent: 'c',  node: 'پیمانکاری صنعتی' },
		{ id: 46,   parent: 'c',  node: 'تجارت عمده فروشی به جز وسایل نقلیه موتور' },
		{ id: 47,   parent: 'c',  node: 'خرده فروشی به استثنای وسایل نقلیه موتوری' },
		{ id: 49,   parent: 'c',  node: 'کاشی و سرامیک' },
		{ id: 50,   parent: 'c',  node: 'تجارت عمده و خرده فروشی وسایل نقلیه موتور' },
		{ id: 51,   parent: 'c',  node: 'حمل و نقل هوایی' },
		{ id: 52,   parent: 'c',  node: 'انبارداری و حمایت از فعالیت های حمل و نقل' },
		{ id: 53,   parent: 'c',  node: 'سیمان، آهک و گچ' },
		{ id: 54,   parent: 'c',  node: 'سایر محصولات کانی غیر فلزی' },
		{ id: 55,   parent: 'c',  node: 'هتل و رستوران' },
		{ id: 56,   parent: 'c',  node: 'سرمایه گذاری ها' },
		{ id: 57,   parent: 'c',  node: 'بانک ها و موسسات اعتباری' },
		{ id: 58,   parent: 'c',  node: 'سایر واسطه گری های مالی' },
		{ id: 59,   parent: 'c',  node: 'اوراق حق تقدم استفاده از تصحیلات مسکن' },
		{ id: 60,   parent: 'c',  node: 'حمل و نقل، انبارداری و ارتباطات' },
		{ id: 61,   parent: 'c',  node: 'حمل و نقل آبی' },
		{ id: 64,   parent: 'c',  node: 'مخابرات' },
		{ id: 65,   parent: 'c',  node: 'واسطه گری های مالی و پولی' },
		{ id: 66,   parent: 'c',  node: 'بیمه و صندوق بازنشستگی به جز تامین اجتماعی' },
		{ id: 67,   parent: 'c',  node: 'فعالیت های کمکی به نهاد های مالی واسط' },
		{ id: 68,   parent: 'c',  node: 'صندوق سرمایه گذاری قابل معامله' },
		{ id: 69,   parent: 'c',  node: 'اوراق تامین مالی' },
		{ id: 70,   parent: 'c',  node: 'انبوه سازی، املاک و مستغلات' },
		{ id: 71,   parent: 'c',  node: 'فعالیت مهندسی، تجزیه، تحلیل و آزمایش فنی' },
		{ id: 72,   parent: 'c',  node: 'رایانه و فعالیت های وابسته به آن' },
		{ id: 73,   parent: 'c',  node: 'اطلاعات و ارتباطات' },
		{ id: 74,   parent: 'c',  node: 'خدمات فنی و مهندسی' },
		{ id: 76,   parent: 'c',  node: 'اوراق بهادار مبتنی بر دارایی فکری' },
		{ id: 77,   parent: 'c',  node: 'فعالیت های اجاره و لیزینگ' },
		{ id: 82,   parent: 'c',  node: 'فعالیت پشتیبانی اجرایی اداری و حمایت کسب' },
		{ id: 90,   parent: 'c',  node: 'فعالیت های هنری، سرگرمی و خلاقانه' },
		{ id: 98,   parent: 'c',  node: 'تست' },
		{ id:'X1',  parent: 'c',  node: 'شاخص' }
	];

	arr.filter(i => i.parent === 'a').forEach(i => i.id += 100);
	arr.filter(i => i.parent === 'c' && !['01','02','X1'].includes(i.id)).forEach(i => i.id += 1000);

	function init$1($el, ins) {
		return new Promise((resolve, reject) => {
			const jd = finalData( transformData(ins) );
			$el.jstree({
				core: {
					data: jd,
					check_callback: true,
				},
				plugins: ['checkbox']
			});
			
			$el
			.on('changed.jstree', function (e, data) {
				// el.jstree('rename_node', '1', 'new text')
			})
			.on('ready.jstree', function () {
				$el.jstree('close_node', 'b1');
				resolve(jd);
			});
		});
	}

	var jstree = { init: init$1 };


	function transformData(ins) {
		// count YVal occurrences
		arr.forEach(i => i.count = 0);
		ins.forEach(i => {
			let idx;
			idx = arr.findIndex( j => j.id === +i.YVal || (j.alias && j.alias.includes(+i.YVal)) );
			if (idx !== -1) arr[idx].count += 1;
			
			idx = arr.findIndex(j => j.id === i.Flow+100);
			if (idx !== -1) arr[idx].count += 1;
			
			idx = arr.findIndex(j => ['01','02','XD'].includes(j.id)
				? j.id === i.CSecVal.trim()
				: j.id === +i.CSecVal+1000
			);
			if (idx !== -1) arr[idx].count += 1;
		});
		
		// count categories (by summing up their children count)
		countCats(arr);
		let dd = arr;
		
		// remove 0 counts:
		dd = dd.filter(i => i.count !== 0);
		
		// merge 1-child categories:
		dd
			.filter(i => dd.filter(j=>j.parent===i.id).length === 1)
			.map( i=> dd.findIndex(j=>j.id===i.id) )
			.forEach(i => {
				dd.filter(j=>j.parent===dd[i].id).forEach(j=>j.parent = dd[i].parent);
				dd.splice(i, 1);
			});
		
		// place child-less nodes with a category sibling at end:
		const childlessWithCatSibling = dd
			.filter(i => !dd.filter(j=>j.parent===i.id).length)                                // childless nodes
			.map(i => [i, dd.filter(j=>j.parent===i.parent && j.id!==i.id)] )                  // ... siblings
			.filter(i=> i[1].map(j=> dd.filter(k=>k.parent===j.id).length).reduce((a,c)=>a+c)) // ... siblings that have children
			.map(i => i[0]);
		
		childlessWithCatSibling.forEach( i => dd.splice(dd.findIndex(j=>j.id===i.id), 1) );
		dd = dd.concat(childlessWithCatSibling);
		/* const childless = dd.filter(i => !dd.filter(j=>j.parent===i.id).length);
		childless.forEach( i => dd.splice(dd.findIndex(j=>j.id===i.id), 1) );
		dd = dd.concat(childless); */
		
		// raw.filter((v,i,a) => v.parent === '#' && a.find(j=>j.parent === v.id) ) // categories
		// raw.filter((v,i,a) => !a.find(j=>j.parent === v.id) ) // not category
		return dd;
	}
	function countCats(arr) {
		const cats = arr.filter(i=> arr.filter(j=>j.parent===i.id).length ); // nodes that have children
		const nonRoots = cats.filter(i=>i.parent!=='#');
		const roots = cats.filter(i=>i.parent==='#');
		const count = cat => {
			cat.forEach(i =>
				i.count = arr
					.filter(j=>j.parent===i.id) // get children of this node
					.map(i=>i.count)            // sum the children counts...
					.reduce((a,c)=>a+c)
					// .reduce((a,c)=>({count:a.count+c.count})).count;
			);
		};
		count(nonRoots); // must be counted first
		count(roots);
	}

	function finalData(baseData) {
		const jd = baseData.map(i => ({
			id: ''+i.id,
			text: `${i.node} <small>(${i.count})</small>`,
			parent: ''+i.parent,
			// state: {opened: true},
			...i.id === 'b1' && {state: { selected: true }}, // tmp, preselect one category
			...!baseData.filter(j=>j.parent===i.id).length && {icon: 'hide'} // hide jstree-file
		}));
		// change icon of child-less root-nodes:
		// jd.filter(i => i.parent === '#' && !jd.filter(j=>j.parent===i.id).length)
			// .forEach(i => i.icon = 'jstree-file');
		
		return jd;
	}

	var combo = { init: init$2 };

	async function init$2(instruments) {
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
			if (filterBoxOpened) $filterBox.removeClass(cSlideOff);
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
		let timeout;
		return function (...args) {
			clearTimeout(timeout);
			timeout = setTimeout(() => fn.apply(this, args), wait);
		};
	}

	let $$;

	async function init$3() {
		$$ = __els('[data-root="datable"]');
		
		const ins = tse.getInstruments(true, true);
		await combo.init(ins);
		
		$$.date.on('input blur change', function () {
			const v = +this.value;
			this.value =
				v > this.max ? this.max :
				v < this.min ? this.min : v;
		});
		
		// TODO: place today's date in date inputs
		const jDate = jalaali.toJalaali(new Date());
		
		// TODO: increment year input like 01 02 ... 09 10
		// TODO: make day,month input jump to next one on keydown
		$$.date.on('wheel', function (e) {
			const { deltaY } = e.originalEvent;
			const v = +this.value;
			this.value =
				deltaY < 0 ? v + 1 :
				deltaY > 0 ? v - 1 : this.value;
			$(this).trigger('change');
		});
		
	}

	var datable = { init: init$3 };

	window.log = console.log;

	$(async function () {
		
		await tse.init();
		await datable.init();
		
	});

}());
