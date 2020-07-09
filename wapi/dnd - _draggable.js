(function () {
	function create() {
		const el = this;
		el.style.position = 'absolute';
		
		el.onmousedown = function (e) {
			if (e.target !== el) return;
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
			el.parentElement.ondragover = dragover;
		}
		
		el.ondragend = () => {
			el.style.zIndex = '';
			el.removeAttribute('draggable');
			el.ondragstart = null;
			el.parentElement.ondragover = null;
		};
		
		function dragover(e) {
			e.preventDefault();
			const pad = (+getComputedStyle(el).padding.replace('px','') * 2);
			el.style.left = ((e.pageX - this.offsetLeft) - el.clickX) +pad+ 'px';
			el.style.top = ((e.pageY - this.offsetTop) - el.clickY) +pad+ 'px';
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
		el.ondragstart = null;
		el.ondragend = null;
		el.parentElement.ondragover = null;
		el._draggable = create;
	};
	
	HTMLElement.prototype._draggable = create;
	HTMLElement.prototype._undraggable = destroy;
})();