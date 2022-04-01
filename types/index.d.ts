type IFn = <T>(value: T) => boolean

interface ITypes<T = IFn> {
  isNumber: T
  isBoolean: T
  isString: T
  isNull: T
  isObject: T
  isArray: T
  isDate: T
  isError: T
  isFunction: T
  isSymbol: T
  isMath: T
  isJson: T
  _: Omit<ITypes, '-'>
  getTypes: <T>(value: T | T[]) => string[]
}

declare const types: ITypes
declare const _: ITypes
export { _ }
export default types
