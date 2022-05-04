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

    toString() {
        return `Triangle: color: ${this.color}`
    }

}

const rectangel = new Rectangle(30, 20, "tomato")
const triangle = new Triangle(30, 20, "blue")

rectangel.draw();
triangle.draw();

console.log(rectangel.getArea());
console.log(triangle.getArea());

console.log(rectangel instanceof Rectangle)
console.log(triangle instanceof Rectangle)
console.log(triangle instanceof Triangle)
console.log(triangle instanceof Shape)
console.log(triangle instanceof Object)
console.log(triangle.toString())