var el = $('#el');

!el.children().length
!el.html().trim()
el.is(':empty')       // not definite, since chrome and firefox consider linebreaks and whitespaces nodes
el[0].hasChildNodes()	// alsow not definite