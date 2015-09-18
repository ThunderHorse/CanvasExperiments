function CanvasState(canvas) {
    this.shapes = [];

    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.isDrawing = false;

    this.strokeWidth;
    this.strokeStyle;
    this.shapeClass;

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    var myState = this;
    canvas.addEventListener('mousemove', function (evt) {
        if (!myState.isDrawing) {
            return;
        }
        //console.log('mouse move');
        endPosition = myState.shapes[myState.shapes.length - 1].setEndPosition(getMousePos(canvas, evt));
        drawCanvasItems();
    }, false);

    canvas.addEventListener('mousedown', function (evt) {
        //console.log('mouse down');
        //console.log(myState.strokeStyle);

        //Read Selected Shape Type and create object base ond that
        var genericShape = myState.shapeClass;
        //var shape = new window[genericShape];
        var shape = createShapeObject(genericShape);
        var instance = new shape();

        console.log(instance);

        //var box = new Box();
        instance.sayHello();
        instance.setStrokeStyle(myState.strokeStyle);
        instance.setStrokeWidth(myState.strokeWidth);
        instance.setStartPosition(getMousePos(canvas, evt));
        myState.shapes[myState.shapes.length] = instance;

        myState.isDrawing = true;
    }, false);

    canvas.addEventListener('mouseup', function (evt) {
        //console.log('mouse up');
        finishDrawing();
    });

    canvas.addEventListener('mouseout', function (evt) {
        //console.log('mouse out');
        finishDrawing();
    });

    function finishDrawing() {
        if (!myState.isDrawing) {
            return;
        }
        drawCanvasItems();
        stopDrawing();
    }

    function stopDrawing() {
        myState.isDrawing = false;
        endPosition = null;
    }

    function drawCanvasItems() {
        if (myState.isDrawing) {
            myState.clear();
            //console.log('shape array length: ' + myState.shapes.length);
            for (var i = 0; i < myState.shapes.length; i++) {
                myState.shapes[i].draw(myState.context);
            }
        }
    }

    function createShapeObject(str){
        var arr = str.split(".");

        var fn = (window || this);
        fn = fn[str];

        if (typeof fn !== "function") {
            throw new Error("function not found");
        }

        return fn;
    }
}

CanvasState.prototype.setStrokeWidth = function (strokeWidth) {
    console.log('setting stroke width: ' + strokeWidth);
    this.strokeWidth = strokeWidth;
};

CanvasState.prototype.setStrokeStyle = function (strokeStyle) {
    console.log('setting stroke style: ' + strokeStyle);
    this.strokeStyle = strokeStyle;
};

CanvasState.prototype.setShape = function setShape (shapeClass) {
    console.log('setting shape to: ' + shapeClass);
    this.shapeClass = shapeClass;
};

CanvasState.prototype.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();
    this.context.closePath();
};

function init() {
    var canvas = new CanvasState(document.getElementById('myCanvas'));
}

init();