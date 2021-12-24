/**
 * 定义数组
 */
// 第一种方式：在元素类型后面加上[]，表示由此类型元素组成的数组
var arr1 = [1, 2, 3];
// 第二种方式：使用泛型，泛型格式要注意，类型加上尖括号
var arr2 = [1, 2, 3];
// 定义元素是任意类型的数组
var arr3 = [1, 'dads', false];
var arr4 = [1, 'adfas', false];
/**
 * 元组
 * 定义了一个已知元素数量和类型的数组，各元素的类型不必相同
 */
// 定义了
var x;
x = ['wisdom', 100];
//x = [100, 'ssss']; // 报错
x[0].substr(0, 2);
//x[1].substr(0, 2) // 引用元素时检测元素类型，number类型没有substr方法，报错
/**
 * 枚举 enum
 * enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
 */
var animal;
(function (animal) {
    animal[animal["dog"] = 0] = "dog";
    animal[animal["cat"] = 1] = "cat";
    animal[animal["pig"] = 2] = "pig";
    animal[animal["duck"] = 3] = "duck";
})(animal || (animal = {}));
/**
 * void
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
 */
function fn1() {
    console.log('没有返回值的函数');
}
/**
 * 类型断言
 * 类型断言的使用，首先是必须程序员知道该值的确切类型
 */
var someValue = 'this is a string';
// 使用as
var len = someValue.length;
// 使用尖括号
var len1 = someValue.length;
/**
 * 默认值
 */
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 100 : _a;
}
function testObject(_a) {
    var a = _a.a, b = _a.b;
    console.log(a);
    console.log(b);
}
testObject({ a: 'ccccc', b: 100 });
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObject = { label: '答案一', value: 1 };
printLabel(myObject);
function sayHi(person) {
    console.log(person.name);
    console.log(person.age);
}
sayHi({ name: '王文凯', age: 18 });
