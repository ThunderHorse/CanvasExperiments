function CanvasState(canvas) {
    this.boxes = [];

    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.isDrawing = false;

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
        console.log('mouse move');
        endPosition = myState.boxes[myState.boxes.length - 1].setEndPosition(getMousePos(canvas, evt));
        drawCanvasItems();
    }, false);

    canvas.addEventListener('mousedown', function (evt) {
        console.log('mouse down');
        var box = new Box();
        box.setStartPosition(getMousePos(canvas, evt));
        myState.boxes[myState.boxes.length] = box;

        myState.isDrawing = true;
    }, false);

    canvas.addEventListener('mouseup', function (evt) {
        console.log('mouse up');
        finishDrawing();
    });

    canvas.addEventListener('mouseout', function (evt) {
        console.log('mouse out');
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
            for (var i = 0; i < myState.boxes.length; i++) {
                myState.boxes[i].draw(myState.context);
            }
        }
    }
}

CanvasState.prototype.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();
    this.context.closePath();
};

function init() {
    var canvas = new CanvasState(document.getElementById('myCanvas'));
}

init();