type IFn = <T>(value: T) => boolean
type IType =
  | number
  | boolean
  | string
  | null
  | object
  | Array
  | Date
  | Error
  | Function
  | symbol
  | Math
  | JSON

interface ITypes<T = IFn<IType>> {
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
  getTypes: (value: IType | any[]) => string[]
}

declare const types: ITypes
declare const _: ITypes
export { _ }
// = export default types  tsconfig.json中配置属性【esModuleInterop】为true
export = types
