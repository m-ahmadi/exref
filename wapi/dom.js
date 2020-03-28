function parseHTML(str) {
  var el = document.createElement('div');
  el.innerHTML = str;
  return el.children;
}