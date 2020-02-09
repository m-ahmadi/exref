var input = document.getElementById("myinput");

var awesomplete = new Awesomplete(
	input, // html element or selector: "#myinput"
{
	minChars: 3,
	maxItems: 15,
	
	// list of suggestion items.
	// it can be set after init.
	// possible options for value:
	//   an array.
	//   an html element containing the list items. (datalist or ul)
	//   a selector for an html element.
	list: [],
	
	// how entries get matched. invoked each time input text changes.
	// text:     current suggestion text that's being tested.
	// input:    a string with the user's input it's matched against.
	// return:   boolean. true: successful match. false: unsuccessful match.
	// default:  text can match anywhere. case insensitive.
	filter: function (text, input) {
		// example: only match strings that start with the user's input, case sensitive:
		return text.indexOf(input) === 0;
	},
	
	// how list items are ordered.
	// sort function for sorting the items.
	// items are sorted after being filtered and before truncated and converted to html elements.
	// passed directly to Array.prototype.sort()
	// default: sorted by length first, order second.
	sort: function () {} || false,
	
	// how list container element is generated. invoked once during init.
	// input:    html input element passed to the constructor.
	// return:   an html element to be the container.
	// default:  generates <div> with class awesomplete.
	container: function (input) {
		input.setAttribute("hasan", "gholi");
		return input;
	},
	
	// how list items are generated. fired when input changes.
	// function with two parameters:
	// text:      suggestion text based on what was typed.
	// input:     the text which was typed into the input field by the user.
	// return:    list item.
	// default:   generates list items with the user's input highlighted via <mark>.
	item: function (text, input) {
	// simulating what actually happens:
		var highlighted = text.replace(new RegExp(input, "ig"), `<mark>${input}</mark>`);
		var el = document.createElement("li");
		el.innerHTML = highlighted;
		// return $.parseHTML(`<li>${highlighted}</li>`)[0];
		return el;
	},
	
	// how the user's selection replaces the user's input.
	// this function replaces the current input value with the text of the selected option.
	// text:      text of the selected option.
	replace: function (text) {
	// default:
		this.input.value = text;
	},
	
	// controls suggestions label and value.
	// item:          the original list item.
	// input:         a string with the user's input.
	// return:        a list item in one of the default formats:
	data: function (item, input) {
		var res;
		// default formats:
		res = "JavaScript";
		res = { label: "JavaScript", value: "JS" };
		res = [ "JavaScript", "JS" ];
		return res;
	}
});