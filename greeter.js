// 枚举，枚举的好处是可以根据名字取值，也可以通过值取名字，比如 Type[2]
var Type;
(function (Type) {
    Type[Type["STUDENT"] = 1] = "STUDENT";
    Type[Type["TEACHER"] = 2] = "TEACHER";
    Type[Type["MASTER"] = 3] = "MASTER";
})(Type || (Type = {}));
var type = Type.STUDENT;
var typeName = Type[2];
console.log(type); // 1
console.log(typeName); // TEACHER
function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
// let user = ["Jane User"];
var user = {
    firstName: 'Jane',
    lastName: 'User'
};
// 定义数组
var arr1 = [0, 1, 2];
var arr2 = [0, 1, 2];
// 元组
var x;
x = ['wisdom', 1];
var s1 = x[0].split('');
var s2 = x[1].toString();
// any (any类型，不限制数据类型)
var anyType = 'wisdom';
var anyArr = [1, 'ad', false];
// 使用泛型
var anyArr1 = [1, 'adf', true];
//void(定义变量类型为void只能赋值undefined/null)一般定义没用返回值的函数
var voidType = undefined;
var voidType1 = null;
function noReturn() {
    console.log('no return value');
}
// object
// declare function create(o: object | null): void;
// create({});
// create(null);
// create({a:1});
// 断言
var someValue = 'what is your name';
var strLength = someValue.length;
var strLength1 = someValue.length;
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var result = sumMatrix([[1, 2, 3, 4], [1, 2, 3, 4, 5]]);
console.log(result);
function testLet(arr) {
    for (var i = 0; i < arr.length; i++) {
        (function (i) {
            i = 3;
            console.log(i);
        })(i);
    }
}
testLet([1, 2, 3, 4, 5]);
// 限制printLabel的参数value必须有一个属性是label
function printLabel(value) {
    console.log(value.label);
}
printLabel({ label: 'showLabel' });
function testInterface(item) {
    console.log(item.value);
}
testInterface({ label: "小明", value: 0 });
var mySearch;
// 形参名可以随意取-不一定需要和接口里字段名相同
mySearch = function (source, subStr) {
    var result = source.search(subStr);
    return result > -1;
};
var myArr;
myArr = ['apple', 'origin'];
var myStr = myArr[0];
function testReadOnly(name) {
    // name.name = '小红'; //  Cannot assign to 'name' because it is a read-only property.
}
testReadOnly({ name: '小明' });
document.body.innerHTML = greeter(user);
