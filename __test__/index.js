const { isNumber, _, getTypes } = require('../dist/index')

console.log(isNumber(1))
console.log(_.isString(2))

console.log(getTypes([1, '1', [], {}]))
