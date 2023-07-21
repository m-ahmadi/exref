// https://developer.mozilla.org/en-US/docs/Web/API/FormData

new FormData()
new FormData(form)
new FormData(form, submitter)

var formData = new FormData();

formData.append(name, value, ?filename)
formData.delete(name)
formData.entries()
formData.get(name)
formData.getAll(name)
formData.has(name)
formData.keys()
formData.set(name, value, ?filename)
formData.values()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var form = document.querySelector('form');
var submitter = document.querySelector('button');
var formData = new FormData(form, submitter);
