// avoid excessive specificity
$('.data table.attendees td.gonzalez')
$('.data td.gonzalez')               // better (drop the middle if possible)

// begin the selector with an id
$('#container div.robotarm')         // fast       (uses querySelectorAll)
$('#container').find('div.robotarm') // super fast (uses getElementById)

// avoid these selectors (sizzle-only and not available in querySelectorAll)
:button      :animated    :first     :eq()     [name!="value"]
:checkbox    :visible     :last      :has()
:input       :selected    :odd       :lt()
:radio       :hidden      :even      :gt()
:text                     :parent    
:image
:file
:header
:password
:submit
:reset
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// only for older browsers (ie8 and below)

// be specific on right-hand side of selector, and less specific on the left.
// use `tag.class` on right-most and just `tag` or `.class` on left
$('div.data .gonzalez')  // unoptimized
$('.data td.gonzalez')   // optimized (better)

// avoid the universal selector
$('.buttons > *')        // extremely expensive
$('.buttons').children() // much better

$(':radio')              // implied universal selection
$('*:radio')             // same thing, explicit now
$('input:radio')         // much better
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@