interface EmployeeKeyType {
  [key: number]: EmployeeValueType
}

interface EmployeeValueType {
  id: number,
  fullName: string,
  role: string
}




let employees: EmployeeKeyType = {
  0: {id: 1, fullName: 'wisdom', role: 'male'},
  1: {id: 1, fullName: 'xiaoming', role: 'male'},
  2: {id: 1, fullName: 'xiaoming', role: 'male'},
}

interface StringArray {
  [key: number]: string,
}

let arr1: StringArray = ['1', '2', '3', '4']
let arr2: number[] = [1, 2, 3, 4]
let arr3: Array<number> = [1, 2, 3, 4]
let arr4: [string, string, string] = ['1', '2', '3']
let arr5 = <StringArray>[]
arr5 = ['1', '2', '2']
let arr6: Array<StringArray> = ['1', '2', '3']

interface Point {
  readonly x: number,
  readonly y: number
}

let p1: Point = {x: 1, y: 1}

// p1.x = error
interface SquareConfig {
  color?: string;
  width?: number;

  [key: string]: any;
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let search: SearchFunc = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
}

let ret = search('a', 'b')

class Animal {
  name: string
}

class Dog {
  breed: string
}

interface NotOkay {
  [x: string]: Animal,
}

let d: unknown // unknown 实际上是一个类型安全的any， any类型的数据可以赋值给任意类型
d = 10
let a: string
a = d as string // 类型断言
a = <string>d // 泛型
 // void never 主要针对函数

