## where-type

#### introduce
```
  1. judge assign data type
  2. computed get assign data type
```

#### install
```
  1. npm install where-type -D
  2. yarn add where-type -D
```

#### use
```javascript
  const {isNumber, isString, _, getTypes} = require('where-type')
  isNumber(1) // true
  isNumber('1') // false
  isString('1') // true
  _.isBoolean(false) // true
  getTypes(1) // [number]
  getTypes([1, '1']) // [number, string]
```

#### global api
```
  isNumber,
  isBoolean,
  isNull,
  isString,
  isObject,
  isUndefined,
  isFunction,
  isArray,
  isDate,
  isError,
  isRegExp,
  isSymbol,
  isMath,
  isJson,
  _,
    _.isNumber,
    _.isString,
    _.isDate
    ...
  getTypes
    parameter: string or array
    if parameter is any vlaue, return type is string[]
      getTypes('1') // [string]
    is parameter is array, Type is returned in an array 
      getTypes([1, '2', false]) // [number, string, boolean]
```
