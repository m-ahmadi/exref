// includes: imask.js
// cdn: https://unpkg.com/imask@6.0.1/dist/imask.min.js

var el = document.getElementById('myInput');

var mask = IMask(el, {
	mask: '+{7}(000)000-00-00',
	lazy: false
});

var digitsMask = IMask(element, {
  mask: /^\d+$/
});

mask.value
mask.unmaskedValue
mask.typedValue

mask.updateOptions({
  mask: 0,
  min: 0,
  max: 100
})

mask.destroy()

mask.on('accept', ()=>)
mask.on('complete', ()=>)

mask.off('accept', ()=>)

mask.masked.reset()