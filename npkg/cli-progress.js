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

preset = cliProgress.Presets['legacy|shades_classic|shades_grey|rect']

var bar = new cliProgress.SingleBar(options, ?preset=preset | {})

bar.value                  0
bar.terminal               null
bar.clearOnComplete        false
bar.stopOnComplete         false
bar.barsize                0
bar.align                  ''
bar.hideCursor             false
bar.linewrap               false
bar.barCompleteString      ''
bar.barIncompleteString    ''
bar.barGlue                ''
bar.format                 ''
bar.formatTime             null
bar.formatValue            null
bar.formatBar              null
bar.etaBufferLength        0
bar.etaAsynchronousUpdate  false
bar.synchronousUpdate      true
bar.noTTYOutput            false
bar.notTTYSchedule         0
bar.emptyOnZero            false
bar.forceRedraw            false
bar.autopadding            false
bar.autopaddingChar        ''

bar.start(totalValue=0, startValue=0, ?payload={})
bar.update(?currentValue=0, ?payload={}) // update progress without altering value if `currentValue` not provided
bar.increment(?delta=1, ?payload={})
bar.setTotal(totalValue=0)
bar.stop()
bar.updateETA()

var multiBarContainer = new cliProgress.MultiBar(options, ?preset=preset | {})
var bar = multiBarContainer.create(totalValue=0, startValue=0, ?payload={})
multiBarContainer.remove(bar)
multiBarContainer.stop()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar.start(200, 0);
bar.update(100);
bar.stop();