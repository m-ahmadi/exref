.. https://docutils.sourceforge.io/docs/user/rst/quickref.html
.. https://docutils.sourceforge.io/rst.html#reference-documentation
.. https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html

.. https://docutils.sourceforge.io/docs/ref/rst/directives.html
.. https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html


.. directive
.. toctree::
	:maxdepth: 3
	:caption: Contents:
	
	foo
	custom title <bar>
	baz


.. comment

.. empty comment (blank lines before and after) does not consume following blocks

	So this block is not "lost",  despite its indentation.


.. section
######
Part 1
######

*********
Chapter 1
*********

Section 1.1
===========

Sub-section 1.1.1
-----------------

Sub-Sub-Section 1.1.1.
^^^^^^^^^^^^^^^^^^^^^^


.. indent
	no definitive indentation specs, other than:
	option lists:    at least 2 spaces
	footnotes:       at least 3 spaces


.. inline markup
*emphasis*
**strong emphasis**
`interpreted text`
``inline literal``
reference_
`phrase reference`_
anonymous__
_`inline internal target`
|substitution reference|
footnote reference [1]_
citation reference [CIT2002]_
standalone hyperlink https://docutils.sourceforge.io/


.. link
an inline `link <http://example.com>`_ to somewhere

`a link`_ with separated target definition

.. _a link: https://example.com


.. code block - pre-formatted
pre-formatted code block::
		Y = lambda x: x ** 4


.. code block
.. code:: python
	:number-lines:

	def my_function():
		"just a test"
		print(8/2)


.. doctest block
>>> 1 + 1
2


.. topic title
.. topic:: Topic Title

	Subsequent indented lines comprise
	the body of the topic, and are
	interpreted as body elements.


.. bullet list
.. blank line is required before first item and after last item, but is optional between items
* apples
* oranges
* pears

- This is item 1
- This is item 2
- Bullets are "-", "*" or "+".
	Continuing text must be aligned after the bullet and whitespace.

.. number list
1. lather
2. rinse
3. repeat

3. This is the first item
4. This is the second item
5. Enumerators are arabic numbers, single letters, or roman numerals
6. List items should be sequentially numbered, but need not start at 1
	(although not all formatters will honour the first index).
#. This item is auto-enumerated


.. nested list
1. fruits

	* apple
	* banana

2. vegetables

	* carrot
	* broccoli


.. block quote
block quote
	If you can't reduce a difficult engineering problem to just
	one sheet of paper, you will probably never understand it.
	-- Ralph Peck


.. simple table
=====  =====  =======
A      B      A and B
=====  =====  =======
False  False  False
True   False  False
False  True   False
True   True   True
=====  =====  =======


.. grid table
+------------------------+------------+----------+----------+
| Header row, column 1   | Header 2   | Header 3 | Header 4 |
| (header rows optional) |            |          |          |
+========================+============+==========+==========+
| body row 1, column 1   | column 2   | column 3 | column 4 |
+------------------------+------------+----------+----------+
| body row 2             | ...        | ...      |          |
+------------------------+------------+----------+----------+


.. multiline text in table
| Multi-line text can
| span in tables
| with a pipe character.


.. admonition
.. DANGER::
	Beware killer rabbits!

.. note:: This is a note admonition.
	This is the second line of the first paragraph.

.. admonition:: And, by the way...

	You can make up your own admonition too.


.. Attention:: All your base are belong to us.

.. Caution:: Don't take any wooden nickels.

.. DANGER:: Mad scientist at work!

.. Error:: Does not compute.

.. Hint:: It's bigger than a bread box.

.. Important::

	* Wash behind your ears.
	* Clean up your room.
	* Back up your data.

.. Note:: Admonitions can be handy to break up a
	long boring technical document.

.. Tip:: 15% if the service is good.

.. WARNING:: Reader discretion is strongly advised.


.. image
.. image:: _static/pic.png
	:alt: Image

.. image:: _static/pic2.jpg
	:width: 400 px
	:height: 200px
	:scale: 80 %
	:alt: alternate text
	:align: right


|Red light| means stop, |green light| means go.

.. |red light|    image:: _static/red_light.png
	:align: top
	:width: 100px
	:height: 200px
.. |green light|  image:: _static/green_light.png
	:align: bottom
	:width: 100px
	:height: 200px


.. figure
.. figure:: _static/pic2.jpg
	:scale: 50 %
	:alt: map to buried treasure

	This is the caption of the figure (a simple paragraph).

	The legend consists of all elements after the caption.  In this
	case, the legend consists of this paragraph and the following
	table:

	+------------------------------+------------------------+
	| Symbol                       | Meaning                |
	+==============================+========================+
	| .. image:: _static/pic4.jpg  | Campground             |
	+------------------------------+------------------------+
	| .. image:: _static/pic5.jpg  | Lake                   |
	+------------------------------+------------------------+
