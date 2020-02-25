var a = new Awesomplete("#myInput", {list: "#myList"});


a.open()       // opens the popup.

a.close()      // closes the popup.
	
a.next()       // highlights the next item in the popup.

a.previous()   // highlights the previous item in the popup.

a.select()     // selects the currently highlighted item, replaces the text field's value with it and closes the popup.

a.destroy()    // clean up and remove the instance from the input.

a.goto(i)      // highlights the item with index i in the popup (-1 to deselect all).
               // avoid using this directly and try to use next() or previous() instead when possible.

a.evaluate()   // evaluates the current state of the widget and regenerates the list of suggestions or closes the popup if none are available.
               // you need to call it if you dynamically set list while the popup is open.
