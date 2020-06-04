const Comp1 = <h1>hi</h1>;       // valid but incorrect (mustn't be capitalized)
const Comp2 = () => <h1>hi</h1>; // correct
const comp3 = () => <Comp2 />;   // error (user-defined component must be capitalized)
const Comp4 = () => <Comp2 />;   // correct

const name = 'Neo';
const arr = [1,2,3];
const el = <h2>Hello {name}</h2>;
const mult = (
	<div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
const list = arr.map((v,i) => <li key={i}>{v}</li>);

const App = () => (
<div>
	{/* basic */}
	<Comp1 />           error               (cuz not a component and cannot be rendered)
	{Comp1}             valid but incorrect (cuz capitalized but not a component)
	<comp3 />           error               (cuz not capitalized but a component)
	<Img src="x.png" /> error               (no such component exists here)
	<list[0] />         error               (no js expression as element type)
	<Comp2 />           correct
	<img src="x.png" /> correct
	{el}                correct
	{mult}              correct
	<Comp>foo</Comp>    correct
	
	{/* differences from html */}
	error:                              correct:
	<p tabindex="1"></p>                <p tabIndex="1"></p> (cuz camelCase html attrs)
	<p class="dark"></p>                <p className="dark"></p>
	<label for="x"></label>             <label htmlFor="x"></label>
	<div innerHTML="&lt;"></div>        <div dangerouslySetInnerHTML={{__html: '2 &lt; 4'}}></div>
	
	{/* if `onChange` is set, then it's a "controlled component" */}
	error:                              correct:
	<input onChange="" />               <input onChange={} /> (cuz cannot be string)
	<input value="1" />                 <input value="1" onChange={} />
	<input value="1" />                 <input value="1" readOnly />
	<input value="1" />                 <input defaultValue="1" />
	<input type="checkbox" checked />   <input type="checkbox" defaultChecked />
	
	<input type="checkbox" defaultChecked="false" />      error
	<input type="checkbox" onChange={} checked="false" /> error
	<input type="checkbox" defaultChecked={false} />      correct
	<input type="checkbox" onChange={} checked={false} /> correct
	
	{/* `style` must be object, can't be string. (camelCase css props, px suffix by default) */}
	<p style="z-index: 3"></p>         error
	<p style={{zIndex: '3'}}></p>      correct
	<p style={{color: 'red'}}></p>     correct
	<div style={{width: 10}}></div>    result: "10px"
	<div style={{width: '10%'}}></div> result: "10%"
	
	{/* text of textarea in its `value`, instead of child text */}
	<textarea>hi</textarea> error
	<textarea value="hi" /> correct
	
	{/* list items must have a uniq key prop */}
	<ul>{
		arr.map(v => <li>{v}</li>)             // Warning: Each child in a list should have a unique "key" prop.
		arr.map((v,i) => <li key={i}>{v}</li>) // correct
	}</ul>
	<ul>{list}</ul>
	<ol>{ arr.map((v,i) => <li key={i}>{v}</li>) }</ol>
	
	{/* prop defaults to true */}
	<Comp foo /> equals <Comp foo={true} />
	
	{/* boolean,null,undefined are ignored. all equal: */}
	<div />
	<div></div>
	<div>{false}</div>
	<div>{null}</div>
	<div>{undefined}</div>
	<div>{true}</div>
	
	{/* string literal in a prop is html-unescaped */}
	<Comp msg="hello" /> equals <Comp msg={'hello'} />
	<Comp msg="&lt;3" /> equals <Comp msg={'<3'} />
	
	{/* jsx member access */}
	<Comp.Foo color="blue" /> correct
	
	{/* spread props from an object to component props */}
	<Comp a="foo" b="bar" /> same as:
	<Comp {...obj} />        (assuming obj had those props)
	
	{/* a value attr on root <select> instead of selected attr on <option> */}
	<select value=2>              this
		<option>1</option>
		<option selected>2</option> not this
	</select>
	
	{/* comment block */}
	{
		// comment line
	}
	{// parse error }
</div>);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// only one root element
return (
	<div>
		<Comp1 />
		<Comp1 />    // correct
		{props.name} // correct
	</div>
	
	<Comp2 />      // Error: adjacent jsx elements must be wrapped in an enclosing tag
	<h1>What?</h1> // ...
	{props.name}   // SyntaxError: Unexpected token, expected ","
);

// except if root is a list:
return [
	<li key="a">First item</li>,
	<li key="b">Second item</li>,
	<li key="c">Third item</li>,
];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// multiple root elements with React.Fragment
// wraps child elements into a parent element without adding extra nodes to dom.
return (
	<React.Fragment>
		<Comp1 />
		<Comp2 />
	</React.Fragment>
)

// short syntax:
return (
	<>
		<td>Hello</td>
		<td>World</td>
	</>
)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@