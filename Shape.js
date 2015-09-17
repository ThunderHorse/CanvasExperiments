function Shape() {
    

    this.draw = function () {
        throw new Error("Shape.draw() is an abstract method!");
    }

    this.setStartPosition = function (startPosition) {
        console.log(startPosition.x + ', ' + startPosition.y);
    };

    this.setEndPosition = function (endPosition) {
        console.log(endPosition.x + ', ' + endPosition.y);
    };
}