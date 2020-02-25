$('#drag > li').draggable({
	revert: true,
	revertDuration: 100
});

$('#drag > li').droppable({
	accept: 'li',
	classes: {
		'ui-droppable-active': 'orange',
		'ui-droppable-hover': 'green'
	},
	drop: function (event, ui) {
		const tmp = $(this).children()[0];
		$(this).empty().append(ui.draggable.children()[0]);
		ui.draggable.empty().append(tmp);
	}
});

/*
<ul id="drag" class="uk-card uk-card-body teal lighten-4 uk-grid-small uk-child-width-1-4" uk-grid>
	<li><div class="uk-card uk-card-body cyan lighten-5">5</div></li>
	<li><div class="uk-card uk-card-body cyan lighten-2">2</div></li>
	<li><div class="uk-card uk-card-body cyan lighten-4">4</div></li>
	<li><div class="uk-card uk-card-body cyan lighten-3">3</div></li>
	<li><div class="uk-card uk-card-body cyan lighten-4">2</div></li>
	<li><div class="uk-card uk-card-body cyan lighten-3">3</div></li>
	<li><div class="uk-card uk-card-body cyan lighten-5">5</div></li>
	<li><div class="uk-card uk-card-body cyan lighten-2">2</div></li>
</ul>
*/