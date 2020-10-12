'myCamelCaseString'.replace(/([a-z])([A-Z])/g, '$1 $2') // 'my Camel Case String'

'myCamelCaseString'.replace(/([A-Z])/g, ' $1')          // 'my Camel Case String'

'myCamelCaseString'.split(/(?=[A-Z])/)                  // ['my', 'Camel', 'Case', 'String']

'thisStringIsGood'
    .replace(/([A-Z])/g, ' $1') // insert space before all caps
    .replace(/^./, str => str.toUpperCase())
'This String Is Good'

