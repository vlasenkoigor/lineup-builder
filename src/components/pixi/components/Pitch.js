import  { Container, Graphics } from "pixi.js";


export class Pitch extends Container {
    get pitchHeight() {
        return this._pitchHeight;
    }

    set pitchHeight(value) {
        this._pitchHeight = value;
    }

    get pitchWidth() {
        return this._pitchWidth;
    }

    set pitchWidth(value) {
        this._pitchWidth = value;
    }


    constructor() {
        super();

        this._pitchWidth = 400;

        this._pitchHeight = 700;

        this._bg = new Graphics();
        this.addChild(this._bg);

        this._drawBackground();
    }



    _drawBackground(){
        const bg = this._bg;
        bg.clear();
        bg.beginFill(0x6DA200, 1);
        bg.drawRect(0, 0, this.pitchWidth, this.pitchHeight);
        bg.endFill();
    }
}
