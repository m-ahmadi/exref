var reader = new FileReader();

reader.error       DOMException
reader.readyState  0|1|2 // EMPTY LOADING DONE
reader.result      ''|ArrayBuffer

reader.onabort     ()=>
reader.onerror     (event)=>
reader.onload      (event)=>
reader.onloadstart ()=>
reader.onloadend   ()=>
reader.onprogress  ()=>

reader.abort()
reader.readAsArrayBuffer(blob)
reader.readAsBinaryString(blob)
reader.readAsDataURL(blob)
reader.readAsText(blobl, ?encoding='UTF-8')

'abort'
'error'
'load'
'loadend'
'loadstart'
'progress'