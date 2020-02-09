"awesomplete-select"
"awesomplete-selectcomplete"
"awesomplete-open"
"awesomplete-close"
"awesomplete-highlight"

// examples:
var el = $("#myInput");

// user has made a selection (either via pressing enter or clicking on an item), but it has not been applied yet.
el.on("awesomplete-select", function (e) {
	e.originalEvent.text   // selected suggestion
	e.originalEvent.origin // origin event dom element
	event.preventDefault() // the selection will not be applied. the popup will not close.
});

// user has made a selection (enter/click), and it has been applied.
el.on("awesomplete-selectcomplete", function (e) {
	e.originalEvent.text   // selected suggestion
});

// popup just appeared.
el.on("awesomplete-open", function (e) {});

// popup just closed.
el.on("awesomplete-close", function (e) {
	e.originalEvent.reason
	// a string which indicates why the event was fired.
	// possible values: "blur", "esc", "submit", "select", "nomatches".	
});

// highlighted item just changed (in response to pressing an arrow key or via an API call).
el.on("awesomplete-highlight", function (e) {
	e.originalEvent.text   // selected suggestion
});