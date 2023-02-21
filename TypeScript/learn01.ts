class Animal {
  name: string;
  color: string;

  constructor(name, color) {
    this.name = name;
    this.color = color
  }

  sayHi() {
    console.log(this.name + 'say hi');
  }
}

class Dog extends Animal{
  age: number
  constructor(age) {
    // @ts-ignore
    super();
    this.age = age
  }
  sayHi() {
    console.log('汪汪汪')
  }
}

let dog = new Dog(12)

