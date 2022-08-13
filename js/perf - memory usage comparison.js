// 22K
let a = 'abcdefghijklmnopqu'.repeat(1e7);
let b = 'abcdefghijklmnopqu'.repeat(1e7);
let c = 'abcdefghijklmnopqu'.repeat(1e7);
let d = 'abcdefghijklmnopqu'.repeat(1e7); // still 22K

//------------------------------------------------
// 400 MB (1e8 == 3.4 GB)
let x = '';
for (let i=0; i<1e7; i++) {
  let code = Math.floor( Math.random()*1e7 );
	x += String.fromCharCode(code);
}

let y = x; // still 400 MB
x = '';    // 22K (after 20-30 seconds)
