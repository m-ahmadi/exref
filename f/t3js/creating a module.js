/*
	<div data-module="my-module">
		<!-- content -->
	</div>
	
	<div data-module="my-module">
		<button data-type="submit-btn">Submit</button>
	</div>
	
	<div class="credit-card-container" data-module="cc-validation-form">
		<form>
			<label>
				CC Number:
				<input type="text" name="cc-number" maxlength="20">
			</label>
			<label>
				Month (##):
				<input type="text" name="cc-exp-month" maxlength="2">
			</label>
			<label>
				Year (####):
				<input type="text" name="cc-exp-year" maxlength="4">
			</label>
			<input type="button" data-type="validate-btn" value="Validate Card">
		</form>
		<span class="message"></span>
	</div>
*/
Box.Application.addModule('moduleID', function (context) {

    // private methods here

    return {

        // public methods here

    };
});

Box.Application.addModule('moduleID', function (context) {

    // private methods here

    return {

        onclick: function(event, element, elementType) {

            // event is a DOM2-compliant event object
            // element is the closest ancestor that has a data-type attribute
            // elementType is the value of element's data-type attribute
        }

    };
});

Box.Application.addModule('cc-validation-form', function (context) {

    'use strict';

    return {

        onclick: function(event, element, elementType) {

            // retrieve the element representing the module
            var moduleEl = context.getElement();

            if (elementType === 'validate-btn') {

                var number = moduleEl.querySelector('[name="cc-number"]').value,
                    month = parseInt(moduleEl.querySelector('[name="cc-exp-month"]').value, 10),
                    year = parseInt(moduleEl.querySelector('[name="cc-exp-year"]').value, 10);

                // do something to validate this information

                event.preventDefault();
            }

        }

    };

});

Box.Application.addModule('cc-validation-form', function(context) {

    'use strict';

    // declare the variable here so all methods can access it
    var moduleEl;

    return {

        init: function () {
            // capture the reference when the module is started
            moduleEl = context.getElement();
        },

        onclick: function (event, element, elementType) {

            if (elementType === 'validate-btn') {

                var number = moduleEl.querySelector('[name="cc-number"]').value,
                    month = parseInt(moduleEl.querySelector('[name="cc-exp-month"]').value, 10),
                    year = parseInt(moduleEl.querySelector('[name="cc-exp-year"]').value, 10);

                // do something to validate this information

                event.preventDefault();
            }

        },

        destroy: function() {
            moduleEl = null;    // clear the reference
        }

    };

});