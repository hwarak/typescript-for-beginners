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
        this._age = value < 0 ? 0 : value
    }
}

const user1 = new User('Steve', 'Job', -1)
console.log(user1.age)

class Experiment{
    publicFeild = 2;
    #privateFeild = 0;
}

const experiment = new Experiment();
console.log(experiment.publicFeild);
console.log(experiment.privateFeild);

class Article {
    static publisher = "today is good";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher)
console.log(Article.publisher)
Article.printPublisher();