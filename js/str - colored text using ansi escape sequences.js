function colors() {
	[
	// foreground:
		['black',      30],
		['red',        31],
		['green',      32],
		['yellow',     33],
		['blue',       34],
		['magenta',    35],
		['cyan',       36],
		['white',      37],
	// foreground bold:
		['whiteB',     90],
		['redB',       91],
		['greenB',     92],
		['yellowB',    93],
		['blueB',      94],
		['magentaB',   95],
		['cyanB',      96],
		['whiteB',     97],
	// background:
		['bgBlack',    40],
		['bgRed',      41],
		['bgGreen',    42],
		['bgYellow',   43],
		['bgBlue',     44],
		['bgMagenta',  45],
		['bgCyan',     46],
		['bgWhite',    47],
	// background bold:
		['bgBlackB',   100],
		['bgRedB',     101],
		['bgGreenB',   102],
		['bgYellowB',  103],
		['bgBlueB',    104],
		['bgMagentaB', 105],
		['bgCyanB',    106],
		['bgWhiteB',   107]
	].forEach(([k, n]) => {
		String.prototype.__defineGetter__(k, function () {
			return `[${n}m${this}[0m`;
		});
	});
}