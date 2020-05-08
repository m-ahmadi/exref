const _templates = {};
_templates['card'] = function (c={}) { return `<div class="card">
	<h1>${c.title} of the card</h1>
	
	<div class="card-body">
		${c.body} of the card.
	</div>
</div>` };
