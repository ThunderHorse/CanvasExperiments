function Shape(lineWidth, strokeStyle) {
    this.lineWidth = lineWidth || "1";
    this.strokeStyle = strokeStyle || "blue";
}

Shape.prototype.sayHello = function () {
    console.log("Hello I'm a shape. Let's Polymorph together.");
}

Shape.prototype.draw = function () {
    throw new Error("Shape.draw() is an abstract method!");
}