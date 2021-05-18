var basicText = new PIXI.Text('Basic text in pixi');

var style = {
	fontFamily : 'Arial',
	fontSize : '36px',
	fontStyle : 'italic',
	fontWeight : 'bold',
	fill : '#F7EDCA',
	stroke : '#4a1850',
	strokeThickness : 5,
	dropShadow : true,
	dropShadowColor : '#000000',
	dropShadowAngle : Math.PI / 6,
	dropShadowDistance : 6,
	wordWrap : true,
	wordWrapWidth : 440
};

var richText = new PIXI.Text(
	'Rich text with a lot of options and across multiple lines',
	style
);

text.interactive = true;
text.buttonMode = true;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Default values, types and description:
var style = {
	font:               'bold 20px Arial',  // String          The style and size of the font.
	fill:               'black',            // String/Number   The text color.
	align:              'left',             // String          Sets the alignment of multiline text. The other options are 'right' and 'center'.
	stroke:             undefined,          // String          The text’s outline color.
	strokeThickness:    0,                  // Number          The thickness, in pixels, of the text outline.
	wordWrap:           false,              // Boolean         Sets word-wrapping for multiline text.
	wordWrapWidth:      100,                // Number          Width at which word-wrapping will start to occur. (wordWrap must also be set to true.)
	lineHeight:         undefined,          // Number          The vertical space used by the text.
	dropShadow:         false,              // Boolean         Sets a drop shadow effect.
	dropShadowColor:    '#000000',          // String          The shadow’s color.
	dropShadowAngle:    Math.PI / 4,        // Number          The shadow’s angle.
	dropShadowDistance: 5,                  // Number          This size of the shadow, in pixels.
	padding:            0,                  // Number          Adds padding to the top and bottom of fonts. This is to help prevent unwanted cropping that occurs with some fonts.
	textBaseLine:       'alphabetic',       // String          The baseline on which the text is drawn. Other options are 'top', 'hanging', 'middle', 'ideographic', and 'bottom'.
	lineJoin:           'mitre',            // String          The corner style of the text. Changing lineJoin can fix problems with spiky text. The two other options are 'round' and 'bevel'.
	mitreLimit:         10                  // Number          The limit, if you’re using the 'mitre' lineJoin option. This can reduce or increase text spikiness.
};