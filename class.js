'use strict'

class User{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not ve negative')
        }
        this._age = value
    }
}

const user1 = new User('Steve', 'Job', -1)
console.log(user1.age)