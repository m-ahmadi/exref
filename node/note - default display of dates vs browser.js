// node shows Date objects in ISO format (when printing)

// by default:
// node    formats Date objects using .toISOString()
// browser formats Date objects using .toString()



// node
new Date() // uses util.inspect() internally
'2026-05-29T15:46:38.921Z'

new Date().toISOString()
'2026-05-29T15:46:38.921Z'

new Date().toString();
'Fri May 29 2026 19:19:29 GMT+0330 (Iran Standard Time)'



// browser
new Date()
'Fri May 29 2026 19:19:29 GMT+0330 (Iran Standard Time)'

new Date().toString()
'Fri May 29 2026 19:19:29 GMT+0330 (Iran Standard Time)'

new Date().toISOString()
'2026-05-29T15:46:38.921Z'
