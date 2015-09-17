Box = function (lineWidth, strokeStyle) {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    Shape.apply(this, arguments);
}

Box.prototype = Object.create(Shape.prototype);
Box.prototype.constructor = Box;

Box.prototype.draw = function (ctx) {
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.strokeStyle;
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
};

Box.prototype.setStartPosition = function (startPosition) {
    this.x = startPosition.x;
    this.y = startPosition.y;
    this.width = 0;
    this.height = 0;
};

Box.prototype.setEndPosition = function (endPosition) {
    console.log(endPosition.x + ', ' + endPosition.y);
    this.width = endPosition.x - this.x;
    this.height = endPosition.y - this.y;
};