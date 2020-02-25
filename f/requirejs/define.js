//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
define({
	color: "black",
	size: "unisize"
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
define(function () {

	return {
		color: "black",
		size: "unisize"
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
define(["./cart", "./inventory"], function (cart, inventory) {

	return {
		color: "blue",
		size: "large",
		addToCart: function () {
			inventory.decrement(this);
			cart.add(this);
		}
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	module can return a function definition:
define(["my/cart", "my/inventory"], function (cart, inventory) {
	return function (title) {
		return title ? (window.title = title) :
		inventory.storeName + ' ' + cart.name;
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
define(['jquery'], function ($) {
	return function () {};
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
define(['dep1', 'dep2'], function (dep1, dep2) {
	return function () {};
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	module id
define('myModule', ['dep1', 'dep2'], function (dep1, dep2) {
	return function () {};
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
define(["require", "jquery", "blade/object", "blade/fn", "rdapi",
		"oauth", "blade/jig", "blade/url", "dispatch", "accounts",
		"storage", "services", "widgets/AccountPanel", "widgets/TabButton",
		"widgets/AddAccount", "less", "osTheme", "jquery-ui-1.8.7.min",
		"jquery.textOverflow"],
	function (require, $, object, fn, rdapi,
		oauth, jig, url, dispatch, accounts,
		storage, services, AccountPanel, TabButton,
		AddAccount, less, osTheme) {
	return {};
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
define(function (require) {
	var dependency1 = require('dependency1'),
	dependency2 = require('dependency2');

	return function () {};
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
define(['require', 'dependency1', 'dependency2'], function (require) {
	var dependency1 = require('dependency1'),
	dependency2 = require('dependency2');

	return function () {};
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
