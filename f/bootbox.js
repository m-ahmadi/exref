/* includes:
bootstrap.min.css
jquery-1.9.1.min.js
bootstrap.min.js
bootbox.min.js */

bootbox.alert('Your message here…')

bootbox.alert('Your message here…', function () { /* your callback code */ })

bootbox.confirm({
  size: 'small',
  message: 'Your message here…',
  callback: function (result) { /* your callback code */ }
})

bootbox.confirm('Your message here…', function (result) { /* your callback code */ })

bootbox.prompt('Your message here…', function (result) { /* your callback code */ })

bootbox.prompt({
  size: 'small',
  message: 'Your message here…',
  callback: function (result) { /* your callback code */ }
})

bootbox.dialog({
  message: 'I am a custom dialog', //	required String|Element
  title: 'Custom title',           // optional String|Element            adds a header to the dialog and places this text in an h4
  onEscape: function () { },       // optional Function                  allows the user to dismisss the dialog by hitting ESC, which will invoke this function
  show: true,                      // optional Boolean, default: true    whether the dialog should be shown immediately
  backdrop: true,                  // optional Boolean, default: true    whether the dialog should be have a backdrop or not
  closeButton: true,               // optional Boolean, default: true    show a close button
  animate: true,                   // optional Boolean, default: true    animate the dialog in and out (not supported in < IE 10)
  className: 'my-modal',           // optional String,  default: null    an additional class to apply to the dialog wrapper
  buttons: {                       // optional Object,  default: {}      any buttons shown in the dialog's footer
    success: {                     // required Object|Function           this first usage will ignore the `success` key 
      label: 'Success!',           // required String                    this button's label
      className: 'btn-success',    // optional String                    an additional class to apply to the button
      callback: function () { }    // optional Function                  the callback to invoke when this button is clicked
    },
    'Danger!': {                  //	this usage demonstrates that if no label property is supplied in the object, the key is used instead
      className: 'btn-danger',
      callback: function () { }
    },
    'Another label': function () { }		//	lastly, if the value supplied is a function, the options are assumed to be the short form of label -> callback
    //										this is the most condensed way of providing useful buttons, but doesn't allow for any configuration
  }
});



















var Example = (function () {
  'use strict';

  var elem,
    hideHandler,
    that = {};

  that.init = function (options) {
    elem = $(options.selector);
  };

  that.show = function (text) {
    clearTimeout(hideHandler);

    elem.find('span').html(text);
    elem.delay(200).fadeIn().delay(4000).fadeOut();
  };

  return that;
}());