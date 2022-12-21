interface Person {
  firstName: string,
  lastName: string,
}

// 枚举，枚举的好处是可以根据名字取值，也可以通过值取名字，比如 Type[2]
enum Type {
  STUDENT = 1,
  TEACHER,
  MASTER,
}

let type: Type = Type.STUDENT;
let typeName: string = Type[2];
console.log(type); // 1
console.log(typeName); // TEACHER

function greeter(person: Person) {
  return `hello ${person.firstName} ${person.lastName}`;
}

// let user = ["Jane User"];
let user = {
  firstName: 'Jane',
  lastName: 'User'
};

// 定义数组
let arr1: number[] = [0, 1, 2];
let arr2: Array<number> = [0, 1, 2];

// 元组
let x: [string, number];
x = ['wisdom', 1];
let s1 = x[0].split('');
let s2 = x[1].toString();

// any (any类型，不限制数据类型)
let anyType: any = 'wisdom';
let anyArr: any[] = [1, 'ad', false];
// 使用泛型
let anyArr1: Array<any> = [1, 'adf', true];

//void(定义变量类型为void只能赋值undefined/null)一般定义没用返回值的函数
let voidType: void = undefined;
let voidType1: void = null;

function noReturn(): void {
  console.log('no return value');
}

// object
// declare function create(o: object | null): void;
// create({});
// create(null);
// create({a:1});

// 断言
let someValue: any = 'what is your name';
let strLength: number = (someValue as string).length;
let strLength1: number = (<string>someValue).length;

function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

let result = sumMatrix([[1, 2, 3, 4], [1, 2, 3, 4, 5]]);
console.log(result);

function testLet(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    (function (i) {
      i = 3;
      console.log(i);
    })(i)
  }
}

testLet([1, 2, 3, 4, 5]);

// 限制printLabel的参数value必须有一个属性是label
function printLabel(value: { label: string }) {
  console.log(value.label);
}

printLabel({label: 'showLabel'});

// 接口interface
interface LabelValue {
  label: string,
  value: number
}

// 设置只读属性
interface Interface {
  readonly name: string
}

function testInterface(item: LabelValue) {
  console.log(item.value);
}
testInterface({label: "小明", value: 0});

// 使用接口表示函数类型
interface SearchFun {
  (source: string, substring: string): boolean //定义函数的参数和返回值类型
}
let mySearch: SearchFun;
// 形参名可以随意取-不一定需要和接口里字段名相同
mySearch = function (source, subStr) {
  let result = source.search(subStr);
  return result > -1;
};

// 可索引的类型
interface StringArray {
  [index: number]: string // 定义索引和返回值类型
}
let myArr: StringArray;
myArr = ['apple', 'origin'];
let myStr: string = myArr[0];

function testReadOnly(name: Interface) {
  // name.name = '小红'; //  Cannot assign to 'name' because it is a read-only property.
}
testReadOnly({name: '小明'});


document.body.innerHTML = greeter(user);



