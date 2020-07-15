/*
autoComplete.min.css
autoComplete.min.js

cdn
https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@latest/dist/css/autoComplete.min.css
https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@latest/dist/js/autoComplete.min.js

npm i @tarekraafat/autocomplete.js
*/

// <input id="autoComplete" tabindex="1" />

new autoComplete({
	data: {                              // required. (everything else is optional)
		src: [''|{}, ...] | ()=>,
		key: ['',], // require if src=={}
		cache: src==[] ? true : src==fn ? false
	},
	selector:     '#autoComplete',       // input field selector
	maxResults:   5,                     // max number of rendered results
	highlight:    true,                  // highlight matching results
	placeHolder:  'Food & Drinks...',    // placeholder text
	threshold:    3,                     // min chars length to start engine
	debounce:     300,                   // post duration for engine to start
	searchEngine: 'strict',              // search Engine type/mode
	query: {                             // query interceptor
		manipulate: (query) => {
			return query.replace('pizza', 'burger');
		}
	},
	sort: (a, b) => {                    // sort rendered results ascendingly
		if (a.match < b.match) return -1;
		if (a.match > b.match) return 1;
		return 0;
	},
	resultsList: {                       // rendered results list object
		render: true,
		// if false, add an eventListener to the selector for event type 'autoComplete' to handle the result
		container: source => {
				source.setAttribute('id', 'food_list');
		},
		destination: document.querySelector('#autoComplete'),
		position: 'afterend',
		element: 'ul'
	},
	
	resultItem: {                        // rendered result item
		content: (data, source) => {
				source.innerHTML = data.match;
		},
		element: 'li'
	},
	noResults: () => {                   // action script on noResults
		const result = document.createElement('li');
		result.setAttribute('class', 'no_result');
		result.setAttribute('tabindex', '1');
		result.innerHTML = 'No Results';
		document.querySelector('#autoComplete_list').appendChild(result);
	},
	onSelection: feedback => {           // action script onSelection event
		console.log(feedback.selection.value.image_url);
	}
});