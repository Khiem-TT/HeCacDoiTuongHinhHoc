import {Shape} from "./Shape";

let shape = new Shape('red', true);
console.log(shape);
console.log(shape.toString());

import {Circle} from "./Circle";

let circle: Circle = new Circle("indigo", false, 3.5);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());

import {Rectangle} from "./Rectangle";

let rectangle: Rectangle = new Rectangle("orange", true, 2.5, 3.8);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());

import {Square} from "./Square";

let square: Square = new Square(5.8, "yellow", true);
console.log(square);
console.log(square.toString());