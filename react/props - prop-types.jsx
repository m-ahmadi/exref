// used for type checking.
// you can declare that a prop is a specific type of javascript value.
// they are all optional.
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
			<h1>Hello, {this.props.name}</h1>
    );
	}
}

Greeting.propTypes = {
  name: PropTypes.string
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// reference:
MyComponent.propTypes = {
  // all optional:
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
  optionalNode: PropTypes.node,

  // a react element.
  optionalElement: PropTypes.element,

  // declare that a prop is an instance of a class: (uses instanceof operator)
  optionalMessage: PropTypes.instanceOf(Message),

  // you can ensure that your prop is limited to specific values by treating it as an enum:
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // an object that could be one of many types:
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // an array of a certain type:
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // an object with property values of a certain type:
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // an object taking on a particular shape:
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
  
  // an object with warnings on extra properties:
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),   

  // chain any of the above with `isRequired` to make sure a warning is shown if the prop isn't provided:
  requiredFunc: PropTypes.func.isRequired,

  // a value of any data type:
  requiredAny: PropTypes.any.isRequired
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// require single child
// only a single child can be passed to a component as children.
class MyComponent extends React.Component {
  render() {
    // this must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
	children: PropTypes.element.isRequired
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// custom validator

MyComponent.propTypes = {
	// you can also specify a custom validator.
	// it should return an Error object if the validation fails.
	// don't `console.warn` or throw, as this won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

	// you can also supply a custom validator to `arrayOf` and `objectOf`.
	// it should return an Error object if the validation fails.
	// the validator will be called for each key in the array or object.
	// the first two arguments of the validator are the array or object itself, and the current item's key.
	customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
		if (!/matchme/.test(propValue[key])) {
			return new Error(
				'Invalid prop `' + propFullName + '` supplied to' +
				' `' + componentName + '`. Validation failed.'
			);
		}
	})
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@