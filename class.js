'use strict'

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!!!!!`)
    }

    getArea() {
        return this.width * this.height
    }
}

class Rectangle extends Shape{

}

class Triangle extends Shape {
    draw() {
        super.draw();
        console.log(`⚠`)
    }
    getArea() {
        return (this.width * this.height) / 2
    }

}

const rectangel = new Rectangle(30, 20, "tomato")
const triangle = new Triangle(30, 20, "blue")

rectangel.draw();
triangle.draw();

console.log(rectangel.getArea());
console.log(triangle.getArea());