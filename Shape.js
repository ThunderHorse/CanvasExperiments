function Shape(lineWidth, strokeStyle) {
    this.lineWidth = lineWidth || "1";
    this.strokeStyle = strokeStyle || "black";
}

Shape.prototype.sayHello = function () {
    console.log("Hello I'm a shape. Let's Polymorph together.");
};

Shape.prototype.draw = function () {
    throw new Error("Shape.draw() is an abstract method!");
};

Shape.prototype.setStartPosition = function (startPosition) {
    throw new Error("Shape.setStartPosition() is an abstract method!");
};

Shape.prototype.setEndPosition = function (endPosition) {
    throw new Error("Shape.setEndPosition() is an abstract method!");
};

Shape.prototype.setStrokeStyle = function (strokeStyle) {
    this.strokeStyle = strokeStyle;
};

Shape.prototype.setStrokeWidth = function (strokeWidth) {
    this.strokeWidth = strokeWidth;
}