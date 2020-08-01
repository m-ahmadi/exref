log = console.log;
(function () {
	let tmp1, tmp2;
	function create() {
		const el = this;
		el.style.position = 'absolute';
		el.style.cursor = 'move';
		
		el.onmousedown = function (e) {
			const { target } = e;
			const cond = elem => elem.classList.contains('drag-handle');
			if ( !cond(target) && !cond(target.parentElement) ) return; //if (target !== el) return;
			el.setAttribute('draggable', true);
			el.ondragstart = dragstart;
		};
		
		function dragstart(e) {
			const dt = e.dataTransfer;
			dt.effectAllowed = 'move';
			dt.dropEffect = 'move';
			dt.setDragImage(new Image(), 0, 0);
			this.clickX = e.offsetX;
			this.clickY = e.offsetY;
			el.style.zIndex = '999';
			//el.parentElement.ondragover = dragover;
			if (window.ondragover) tmp1 = window.ondragover;
			window.ondragover = dragover;
			
			const tvIframe = document.querySelector('iframe[id^="tradingview"]');
			const tvDoc = tvIframe ? tvIframe.contentWindow : undefined;
			if (tvDoc.ondragover) tmp2 = tvDoc.ondragover;
			tvDoc.ondragover = dragover;
		}
		
		el.ondragend = () => {
			el.style.zIndex = '';
			el.removeAttribute('draggable');
			el.ondragstart = null;
			//el.parentElement.ondragover = null;
			window.ondragover = tmp1 || null;
			
			const tvchart = document.querySelector('iframe[id^="tradingview"]');
			if (tvchart) tvchart.contentWindow.ondragover = tmp2 || null;
		};
		
		function dragover(e) {
			e.preventDefault();
			const pad = (+getComputedStyle(el).padding.replace('px','') * 2);
			//el.style.left = ((e.pageX - this.offsetLeft) - el.clickX)+'px';
			//el.style.top = ((e.pageY - this.offsetTop) - el.clickY)+30+'px';
			el.style.left = ((e.pageX - el.parentElement.offsetTop) - el.clickX)+pad+'px';
			el.style.top = ((e.pageY - el.parentElement.offsetTop) - el.clickY)+pad+'px';
		}
		el._draggable = true;
		return el;
	};

	function destroy() {
		const el = this;
		el.style.position = '';
		el.style.top = '';
		el.style.left = '';
		el.removeAttribute('draggable');
		el.onmousedown = null;
		el.ondragstart = null;
		el.ondragend = null;
		el.parentElement.ondragover = null;
		el._draggable = create;
	};
	
	HTMLElement.prototype._draggable = create;
	HTMLElement.prototype._undraggable = destroy;
})();