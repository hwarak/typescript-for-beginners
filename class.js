'use strict'


class Person{
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`)
    }
}


const hwarak = new Person(`hwarak`, 26)

console.log(hwarak.name)
console.log(hwarak.age)
hwarak.speak();