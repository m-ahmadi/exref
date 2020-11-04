Object.assign(target, ...sources)           : target
Object.create(proto, ?propertiesObject)     : obj
Object.defineProperties(obj, props)         : obj
Object.defineProperty(obj, prop, descriptor): obj
Object.entries(obj)                         : Array<[key,val]>
Object.freeze(obj)                          : obj
Object.fromEntries(iterable)                : obj // reverse of Object.entries()
Object.getOwnPropertyDescriptor(obj, prop)  : descriptor|undefined
Object.getOwnPropertyDescriptors(obj)       : obj
Object.getOwnPropertyNames(obj)             : ['','',...]
Object.getOwnPropertySymbols(obj)           : [Symbol,Symbol,...]
Object.getPrototypeOf(obj)                  : obj
Object.is(value1, value2)                   : boolean
Object.isExtensible(obj)                    : boolean
Object.isFrozen(obj)                        : boolean
Object.isSealed(obj)                        : boolean
Object.keys(obj)                            : ['','',...]
Object.preventExtensions(obj)               : obj
Object.seal(obj)                            : obj
Object.setPrototypeOf(obj, prototype)       : obj
Object.values(obj)                          : [val,val...]


Object.values({a:'foo', b:7, c:true}) // ['foo', 7, true]


Object.fromEntries( new Map([ ['a',1], ['b',4] ]) ) // { a: 1, c: 2 }
Object.fromEntries( new Map([ ['c',3], ['d',4] ]) ) // { c: 3, d: 4 }         map to obj
Object.fromEntries( [ ['0',7], ['1',8], ['2',9] ] ) // { 0: 7, 1: 8, 2:9 }    arr to obj
Object.fromEntries( Object.entries({a:1,b:2,c:3}).map(([k,v])=>[k,v*2]) ) // { a: 2, b: 4, c: 6 }
