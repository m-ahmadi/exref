# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Heading 1
=========

Heading 2
---------

# link
A [link](http://example.com).  
An image: ![Alt](https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_100kB.jpg)
An image ![Alt](/img/foo.png "title")

[A header link](#Foo)

<a name="abcd"></a>
[a page fragment link](#abcd)

# table
Item     | Value
-------- | -----
Computer | $1600
Phone    | $12
Pipe     | $1

| Column 1 | Column 2      |
|:--------:| -------------:|
| centered | right-aligned |

table without headers (hacky)
| | |
|-|-|
|**Bold Key**| Value1 |
| Normal Key | Value2 |

# code
`inline code`
code block
```
var foo = 'bar'; // code block
```
```javascript
var foo = 'bar'; // highlighted code block
```
```css
body { margin: 0 auto; }
```

# writer
*Emphasize* _emphasize_  
**Strong** __strong__  
~~Mistaken text.~~  
> Quoted text.  

# list
- item
  * item
    + item
- item
  - item
    - item
* item
  * item
    * item
+ item
  + item
    + item

1. item
2. item
	1. item
	2. item
		1. item
		2. item
			1. item
			2. item
3. item
	1. item
	2. item
4. item

- item
- item
	1. item
	2. item
		1. item
		2. item
			- item
			- item
				+ item
				+ item

1. Item
2. Item
	1. item
	2. item
		- item
		- item
			1. item
			2. item
3. Item

- [ ] Incomplete item
- [x] Complete item

# hr
3 or more

hyphens 👇

---

asterisks 👇
***

underscores 👇
___

# escaping
```
\ escapes: \ ` * _ { } [ ] ( ) # + - . ! |

` escapes: `
```
`` var a = `foo ${2+2}` ``

# inline html
entity chars &emsp;  like `&nbsp;` `&emsp;`  
`<small>` for <small>tiny text</small>  
`<br>`  
`<hr>` like 👇 <hr>  
`<details>` like 👇  
<details>
	<summary>details</summary>
	<p>this is my detail</p>
</details>

# rtl
<div dir="rtl">
سلام
</div>

# github `linebreak`
2 spcaes before `newline` like  
this or 2 `newline` chars like

this

# `stackedit` only
**link**  
sized image: ![Alt](https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_100kB.jpg =60x50)

**styling**  
==Marked text==  
subscript:  t~i~  
superscript: 2^10^

**footnote**  
and therefore you suck.[^1]  
[^1]: The footnote.

**abbreviation**  
HTML was invented in 1923. (true story)  
*[HTML]: HyperText Markup Language

**math**  
$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$  
$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

**definition list**  
Markdown
:  Text-to-HTML conversion tool

Authors
:  John
:  Luke