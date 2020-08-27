function sleep(ms) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
Atomics.wait(int32, 0, 0);
console.log(int32[0]);