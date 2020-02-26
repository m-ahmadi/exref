$('body').append('<div>')                                // append param to selected (append div to body)
$('<div>').appendTo('body')                              // append selected to param (append div to body)
$('body').prepend('<div>')                               // prepend param to selected (prepend div to body)
$('<div>').prependTo('body')                             // prepend selected to param (prepend div to body)
$('p').after('<div>')                                    // insert param after selected (add div after p)
$('<div>').insertAfter('p')                              // insert selected after param (add div after p)
$('div').data('val')                                     // reading data-val
$('div').data().val = 2                                  // changes data prop but not html
$('div').attr('data-val', 2)                             // changes data prop and html
$('input').attr('value', 'mohammad')                     // set initial input value
$('input').val('ali')                                    // get current input value
$('.checkbox').prop('checked', false)                    // check checkboxes
$('.checkbox').prop('checked', true)                     // uncheck checkboxes
$('div').is(':animated')                                 // check state of element (is element animated)
$('input').is(':focus')                                  // ... is input focused
$('div').is(':visible')                                  // ... :visible === !display:none
$('select').find(':selected').val()                      // get dropdown selected item
$('#foo')[0]                                             // get native dom element. same as: document.getElementById('foo')
$('#foo').get(0)                                         // same as above only slower.
$('<a>').prop('tagName')                                 // get selected element tag name (names are returned capitalized)
$('<a>').prop('tagName').toLowerCase()                   // tag name in lowercase
$('li.third-item').next().css('background-color', 'red') // get next sibling element
$('input[type="radio"][name="type"]:checked').val()      // which radio is checked?
radios.filter(':checked').val()                          // same as above but on already matched set
$('#textarea').val('one \n two \n three')                // insert text and line-breaks into textarea
$('div.second').replaceWith('<h2>New heading</h2>')      // replace an element with another element
$el.closest('selector'|$collection|el, ?ctx=HTMLElement) // search by traversing upward from $el toward document root
$('li').closest('ul')                                    // ... look for selector
$('li').closest(el)                                      // ... look for el
$('li').closest('ul', $('#foo')[0])                      // ... search only inside context
$('.label').clone()                                      // clone element
$('.label').clone().appendTo('body')                     // ...
$('body').append( $('.label').clone() )                  // ...
$('body').index()                                        // index of <body> in its parent
$collection.index(el|$el)                                // index of el in $collection
$('script').index( $('script[src^=http]') )              // ...
$collection.index('selector')                            // index of $collection[0] in els selected by selector
$('script[src^=http]').index('script')                   // ...