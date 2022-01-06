export default function (obj, onDragEndCallback = ()=>{}) {


    function onDragStart(event) {
        // store a reference to the data
        // the reason for this is because of multitouch
        // we want to track the movement of this particular touch
        obj.data = event.data;
        obj.alpha = 0.5;
        obj.dragging = true;
    }

    function onDragEnd() {
        obj.alpha = 1;
        obj.dragging = false;
        // set the interaction data to null
        obj.data = null;
        onDragEndCallback();
    }

    function onDragMove() {
        if (obj.dragging) {
            const newPosition = obj.data.getLocalPosition(obj.parent);
            obj.x = newPosition.x;
            obj.y = newPosition.y;
        }
    }



    obj.interactive = true;
    obj.buttonMode  = true;

    obj
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
}
