<script>
	import Nested from './Nested.svelte';
	let name = 'world';
	
	let count = 0;
	function handleClick() {
		count += 1;
	}
	
	let count2 = 0;
	$: doubled = count2 * 2;
</script>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<h1>Hello {name}!</h1>
<p>This is a paragraph.</p>

<img src={src} /> same as: <img {src} />

<Nested/>

<p>{@html string}</p>

<button on:click={handleClick}>+</button>

<p>{count2} doubled is {doubled}</p>