$('selector', ?context=HTMLElement|$el) // select elements. starts searching at document root (html or body) unless context is provided. (internally uses .find() when context is specified)
$el.find('.title')                      // select inside the selected element.
$('.title', $el)                        // same as above.
$(HTMLElement)                          // wrap dom element in jquery.
$(HTMLElement[])                        // ... or array of dom elements.
$(PlainObject)                          // ... or a js object. (only {} not [] or HTMLElement)
$(jQuery)                               // clone existing jquery object. (not sure what it does, it won't clone dom elements)
$(this)                                 // inside event handlers.
$('#foo\\.bar')                         // escape literal meta-characters: !"#$%&'()*+,./:;<=>?@[\]^`{|}~ (selects <div id="foo.bar">)

// selector reference:
$('*')                                  // select all elements.
$('.class')                             // class:                       select all elements with the given class.
$('#id')                                // id:                          select a single element with the given id attribute.
$('element')                            // tag:                         select all elements with the given tag name.
$('ancestor descendant')                // descendant:                  select all elements that are descendants of a given ancestor.
$('parent > child')                     // direct child:                select all direct child elements specified by "child" of elements specified by "parent".
$('selector1, selector2, selectorN')    // multiple selectors:          select the combined results of all the specified selectors.

$('[name]')                             // attribute exists:            select elements that have the specified attribute, with any value.
$('[name="value"]')                     // attribute equals:            select elements that have the specified attribute with a value exactly equal to a certain value.
$('[name|="value"]')                    // attribute contains prefix:   select elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-).
$('[name*="value"]')                    // attribute contains:          select elements that have the specified attribute with a value containing a given substring.
$('[name~="value"]')                    // attribute contains word:     select elements that have the specified attribute with a value containing a given word, delimited by spaces.
$('[name$="value"]')                    // attribute ends with:         select elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.
$('[name!="value"]')                    // attribute not equal:         select elements that either don’t have the specified attribute, or do have the specified attribute but not with a certain value.
$('[name^="value"]')                    // attribute starts with:       select elements that have the specified attribute with a value beginning exactly with a given string.
$('[name="value"][id="value2"]')        // multiple attribute selector: select elements that match all of the specified attribute filters.
$('prev + next')                        // next adjacent selector:      select all next elements matching "next" that are immediately preceded by a sibling "prev".
$('prev ~ siblings')                    // next siblings selector:      select all sibling elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector.

$(':button')             // select all button elements and elements of type button.
$(':checkbox')           // select all elements of type checkbox.
$(':checked')            // match  all elements that are checked or selected.
$(':disabled')           // select all elements that are disabled.
$(':enabled')            // select all elements that are enabled.
$(':selected')           // select all elements that are selected.
$(':hidden')             // select all elements that are hidden.
$(':visible')            // select all elements that are visible.
$(':file')               // select all elements of type file.
$(':password')           // select all elements of type password.
$(':radio')              // select all elements of type radio.
$(':reset')              // select all elements of type reset.
$(':submit')             // select all elements of type submit.
$(':image')              // select all elements of type image.
$(':text')               // select all input elements of type text.
$(':header')             // select all elements that are headers, like h1, h2, h3 and so on.
$(':input')              // select all input, textarea, select and button elements.
$(':contains')           // select all elements that contain the specified text.
$(':focus')              // select element if it is currently focused.
$(':empty')              // select all elements that have no children (including text nodes).
$(':animated')           // select all elements that are in the progress of an animation at the time the selector is run.

$(':first-child')        // select all elements that are the first child of their parent.
$(':first-of-type')      // select all elements that are the first among siblings of the same element name.
$(':first')              // select the first matched DOM element.
$(':last-child')         // select all elements that are the last child of their parent.
$(':last-of-type')       // select all elements that are the last among siblings of the same element name.
$(':last')               // select the last matched element.
$(':nth-child()')        // select all elements that are the nth-child of their parent.
$(':nth-last-child()')   // select all elements that are the nth-child of their parent, counting from the last element to the first.
$(':nth-last-of-type()') // select all the elements that are the nth-child of their parent in relation to siblings with the same element name, counting from the last element to the first.
$(':nth-of-type()')      // select all elements that are the nth child of their parent in relation to siblings with the same element name.
$(':only-child')         // select all elements that are the only child of their parent.
$(':only-of-type')       // select all elements that have no siblings with the same element name.
$(':parent')             // select all elements that have at least one child node (either an element or text).
$(':root')               // select the element that is the root of the document.

$(':eq()')               // select the element at index n within the matched set.
$(':gt()')               // select all elements at an index greater than index within the matched set.
$(':has()')              // select elements which contain at least one element that matches the specified selector.
$(':lang()')             // select all elements of the specified language.
$(':lt()')               // select all elements at an index less than index within the matched set.
$(':not()')              // select all elements that do not match the given selector.
$(':odd')                // select odd elements, zero-indexed. See also even.
$(':even')               // select even elements, zero-indexed. See also odd.
$(':target')             // select the target element indicated by the fragment identifier of the document’s URI.