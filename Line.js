Line = function () {
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this.strokeWidth;
    this.strokeStyle;
    this.context;

    Shape.apply(this, arguments);
}

Line.prototype = Object.create(Shape.prototype);
Line.prototype.constructor = Line;

Line.prototype.draw = function (ctx) {
    this.context = this.context || ctx;

    console.log('drawing a line');

    ctx.lineWidth = this.strokeWidth;
    ctx.strokeStyle = this.strokeStyle;

    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
};

Line.prototype.setStartPosition = function (startPosition) {
    this.startX = startPosition.x;
    this.startY = startPosition.y;
};

Line.prototype.setEndPosition = function (endPosition) {
    this.endX = endPosition.x;
    this.endY = endPosition.y;
};