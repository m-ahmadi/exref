Vue.component(id='', ?definition={} | fn) // register global component
var Comp = Vue.component(id='')           // retrieve ...

Vue.component('comp-1', Vue.extend(def)) // extended constructor
Vue.component('comp-1', def)             // register an options object: (automatically call Vue.extend)
var Comp1 = Vue.component('comp-1')      // get registered component (its constructor)