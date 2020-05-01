// compilation
var fnTemplate = Handlebars.compile(strTemplate, options={
	data:                   false, // disable @data tracking
	compat:                 false,
	knownHelpers:           {},
	knownHelpersOnly:       false,
	noEscape:               false, // dont html escape any content
	strict:                 false,
	assumeObjects:          false,
	preventIndent:          false,
	ignoreStandalone:       false,
	explicitPartialContext: false,
})

// precompile
var templateSpec = Handlebars.precompile(strTemplate, options={
	...compileOptions,
	srcName:  '',
	destName: ''
})
var fnTemplate = Handlebars.template(  eval('(function(){return'+ templateSpec +'})();')  )
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// runtime

// default location when precompiling with cli (after precompiled executed, otherwise undefined)
Handlebars.templates

// register partial - whole lib
Handlebars.registerPartial(strName, strPartial) // compiled on demand. same as:
Handlebars.partials[strName] = Handlebars.compile(strPartial);

// register partial - runtime only
var fnPartial = Handlebars.template(eval('(()=>{return'+templateSpec+'})();'))
Handlebars.registerPartial(strName, fnPartial)  // same as:
Handlebars.partials[strName] = fnPartial

Handlebars.unregisterPartial(strName)

Handlebars.registerHelper(strName, fnHelper)
Handlebars.unregisterHelper(strName)

var isolatedHandlebarsEnvironment = Handlebars.create();
var myHandlebars = Handlebars.noConflict();

Handlebars.escapeExpression(str)
Handlebars.Utils.escapeExpression(text)
new Handlebars.SafeString(str)