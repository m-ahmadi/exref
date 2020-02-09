var textColor = function(bgColor) {
  var output = runNetwork(bgColor);
  if (output.black > .5) {
    return 'black';
	}
  return 'white';
}

var runNetwork = function anonymous(input) {
	return {
		'black': 1/(1+1/Math.exp(-1.961693286895752+16.84273910522461*(1/(1+1/Math.exp(11.431370735168457-9.21420955657959*(input['r'])+0.8613117933273315*(input['g'])-14.21376895904541*(input['b']))))+6.219886779785156*(1/(1+1/Math.exp(3.941866159439087-3.501878261566162*(input['r'])+0.31550461053848267*(input['g'])-5.267943859100342*(input['b']))))-15.417232513427734*(1/(1+1/Math.exp(-9.669509887695312+7.812063217163086*(input['r'])-0.7203384041786194*(input['g'])+12.140480995178223*(input['b']))))))
	};
}