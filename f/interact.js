import interact from 'https://cdn.jsdelivr.net/npm/@interactjs/interactjs/index.js'; // <script type="module">

interact('.item').draggable({
	onmove(event) {
		console.log(event.pageX, event.pageY);
	}
});