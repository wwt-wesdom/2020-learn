/**
 * 定义数组
 */
// 第一种方式：在元素类型后面加上[]，表示由此类型元素组成的数组
let arr1: number[] = [1, 2, 3];
// 第二种方式：使用泛型，泛型格式要注意，类型加上尖括号
let arr2: Array<number> = [1, 2, 3];
// 定义元素是任意类型的数组
let arr3: any[] = [1, 'dads', false];
let arr4: Array<any> = [1, 'adfas', false];

/**
 * 元组
 * 定义了一个已知元素数量和类型的数组，各元素的类型不必相同
 */
// 定义了
let x: [string, number];
x = ['wisdom', 100];
//x = [100, 'ssss']; // 报错
x[0].substr(0, 2);
//x[1].substr(0, 2) // 引用元素时检测元素类型，number类型没有substr方法，报错

/**
 * 枚举 enum
 * enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
 */
enum animal {
  dog,
  cat,
  pig,
  duck
}

/**
 * void
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
 */
function fn1(): void {
  console.log('没有返回值的函数')
}

/**
 * 类型断言
 * 类型断言的使用，首先是必须程序员知道该值的确切类型
 */
let someValue: any = 'this is a string';
// 使用as
let len: number =  (someValue as String).length;
// 使用尖括号
let len1: number = (<string>someValue).length;

/**
 * 默认值
 */
function keepWholeObject(wholeObject: {a: string, b?:number}) {
  let {a, b = 100} = wholeObject;
}

type C = { a: string, b?: number }
function testObject({a, b}: C) {
  console.log(a);
  console.log(b);
}
testObject({a: 'ccccc', b: 100});

/**
 * 接口 interface
 */
interface LabelValue {
  label: string
}
function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label);
}
let myObject = {label: '答案一', value: 1};
printLabel(myObject);
// 可选属性
interface configOne {
  name?: string,
  age?: number,
  [propName: string]: any // 索引签名
}
function sayHi(person: configOne) {
  console.log(person.name);
  console.log(person.age);
}
sayHi({name: 'august', age: 18});
// 只读属性
interface readOnlyIf {
  readonly num: number
}
// 定义只读数组
let arr5: Array<number> = [1,2,3,4];
let arr6: ReadonlyArray<number> = [5,6];
// arr6[0] = 1;
// arr5 = arr6;
