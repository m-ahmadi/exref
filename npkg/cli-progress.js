const cliProgress = require('cli-progress');

const options = {
	format:                '{bar} {percentage} {total} {value} {eta} {duration} {eta_formatted} {duration_formatted}' | ()=>,
	fps:                   10,
	stream:                process.stderr | Stream,
	stopOnComplete:        false,
	clearOnComplete:       false,
	barsize:               40,
	align:                 'left|right|center',
	barCompleteChar:       '=',
	barIncompleteChar:     '-',
	hideCursor:            false | null,
	linewrap:              false,
	etaBuffer:             10,
	etaAsynchronousUpdate: false,
	synchronousUpdate:     true,
	noTTYOutput:           false,
	notTTYSchedule:        2000,
	emptyOnZero:           false,
	forceRedraw:           false,
	barGlue:               '',
	autopadding:           false,
	autopaddingChar:       ' ',
	formatBar:             (progress, options)=>,
	formatTime:            (t, options, roundToMultipleOf)=>,
	formatValue:           (v, options, type)=>,
	// https://www.npmjs.com/package/cli-progress#options-1
};

var bar = cliProgress.SingleBar | MultiBar(options, cliProgress.Presets['legacy|shades_classic|shades_grey|rect'])

bar.start(totalValue=0, startValue=0, ?payload={})
bar.update(currentValue=0, ?payload={})
bar.increment(?delta=1, ?payload={})
bar.setTotal(n=0)
bar.stop()
bar.updateETA()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar.start(200, 0);
bar.update(100);
bar.stop();