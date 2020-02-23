// fired only on <input> <select> <textarea>:

// when what happens                                              in what element
'input' /*
value is changed                                                  <input> <select> <textarea>
typing or cut/pasting                                             <input type=text> <textarea>
up/down arrow keys                                                <input type=number>
selecting dropdown item                                           <select>  */

'change' /*
el loses focus & value is changed (compared to last focus lost)   <input type=text> <textarea>
el is :checked                                                    <input type=radio|checkbox>
selecting dropdown item                                           <select>
selecting date                                                    <input type=date>
selecting file                                                    <input type=file>  */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
'focus'    // el receives focus
'blur'     // el looses focus
'focusin'  // same as 'focus' but bubbles
'focusout' // same as 'blur'  but bubbles
'cut'
'copy'
'paste'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// non-standard
'search' // when x is clicked in <input type="search" />