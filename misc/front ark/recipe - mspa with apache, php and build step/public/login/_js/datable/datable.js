import tse from '../tse/tse.js';
import combo from './combo.js';

let $$;
const dateRgx = /^[0189]{1}\d{1}\/(1[0-2]|[1-9])\/([1-9]|[1-2]\d|3[01])$/;

async function init() {
	$$ = __els('[data-root="datable"]');
	
	const ins = tse.getInstruments(true, true);
	await combo.init(ins);
	
	$$.date.on('input blur change', function () {
		const v = +this.value;
		this.value =
			v > this.max ? this.max :
			v < this.min ? this.min : v;
	});
	
	// TODO: place today's date in date inputs
	const jDate = jalaali.toJalaali(new Date());
	
	// TODO: increment year input like 01 02 ... 09 10
	// TODO: make day,month input jump to next one on keydown
	$$.date.on('wheel', function (e) {
		const { deltaY } = e.originalEvent;
		const v = +this.value;
		this.value =
			deltaY < 0 ? v + 1 :
			deltaY > 0 ? v - 1 : this.value;
		$(this).trigger('change');
	});
	
}

export default { init }