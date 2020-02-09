// get difference between right now and 07:10 morning in seconds:
function secDiff() {
	const now = new Date()
	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();
	if (h < 7) {
		const hdiff = 7 - h;
		const mdiff = (hdiff * 60) - m;
		const sdiff = (mdiff * 60) - s;
		return sdiff + 600; // 07:10
	} else {
		return '';
	}
}
// one-liner:
var n=new Date(),h=n.getHours(),m=n.getMinutes(),s=n.getSeconds();h<7?(((((7-h)*60)-m)*60)-s)+600:'';