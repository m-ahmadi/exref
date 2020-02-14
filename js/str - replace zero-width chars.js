'u+200B' // zero-width space
'u+200C' // zero-width non-joiner
'u+200D' // zero-width joiner
'u+FEFF' // zero-width no-break space

str.replace(/[\u200B-\u200D\uFEFF]/g, '')
str.replace(/[\u200C]/g, ' ')