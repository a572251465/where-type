const obj = {}

/**
 * @author lihh
 * @description 高级函数判断数据类型
 * @param {*} type 传递的数据类型
 * @returns 返回执行函数
 */
const isType = function isType(type) {
  const params = String(type).toLocaleLowerCase()
  return function specificType(value) {
    const judgeType = `[object ${params}]`
    const resultType = obj.toString.call(value).toLocaleLowerCase()

    return judgeType === resultType
  }
}

const isNumber = isType('Number')
const isBoolean = isType('Boolean')
const isString = isType('String')
const isNull = isType('Null')
const isObject = isType('Object')
const isUndefined = isType('Undefined')
const isFunction = isType('Function')
const isArray = isType('Array')
const isDate = isType('Date')
const isError = isType('Error')
const isRegExp = isType('Function')
const isSymbol = isType('Symbol')
const isMath = isType('Math')
const isJson = isType('Json')

/**
 * @author lihh
 * @description 用来获取数据类型
 * @param {*} value 需要获取的值 单值(非数组)/ 数组
 */
const getTypes = function getTypes(value) {
  // 判断是否是数组
  if (isArray(value)) {
    return value.map((item) => {
      const execRes = /\s+([a-zA-Z]+)/gi.exec(obj.toString.call(item))
      const firstWorld = execRes[0].trim().toLocaleLowerCase()
      return firstWorld
    })
  }

  const result = getTypes([value])
  return result[0]
}

const _ = {}
const allTypes = [
  'Number',
  'Boolean',
  'String',
  'Null',
  'Object',
  'Undefined',
  'Function',
  'Array',
  'Date',
  'Error',
  'Function',
  'Symbol',
  'Math',
  'Json'
]

let i = 0
for (; i < allTypes.length; i += 1) {
  const iden = allTypes[i]
  const field = `is${iden}`

  if (!Reflect.has(_, field)) {
    Object.defineProperty(_, `is${iden}`, {
      value: isType(iden),
      enumerable: false,
      writable: false
    })
  }
}

module.exports = {
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
  getTypes
}
