Box = function () {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.strokeWidth = '';
    this.strokeStyle = '';
    this.context = '';

    Shape.apply(this, arguments);
}

Box.prototype = Object.create(Shape.prototype);
Box.prototype.constructor = Box;

Box.prototype.draw = function (ctx) {
    this.context = this.context || ctx;

    console.log('box draw strokeColor: ' + this.strokeStyle);
    console.log('box draw lineWidth: ' + this.strokeWidth);
    //console.log('x: ' + this.x);
    //console.log('y: ' + this.y);
    ctx.lineWidth = this.strokeWidth;
    ctx.strokeStyle = this.strokeStyle;

    console.log('ctx line width: ' + ctx.lineWidth);
    console.log('ctx stroke style: ' + ctx.strokeStyle);

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