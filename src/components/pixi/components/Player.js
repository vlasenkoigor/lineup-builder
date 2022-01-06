import  { Container, Loader, Sprite, Text } from "pixi.js";
import draggable from "./draggable";
export class Player extends Sprite {
    constructor(id,name, onDragEndCallback = ()=>{}) {
        const {resources} = Loader.shared;
        super(resources['kit'].texture);

        this.id = id;

        this.name = name;

        this.nameTf = new Text(name, {fontSize : 15});
        this.nameTf.anchor.set(0.5);
        this.nameTf.y = this.height / 2;
        this.addChild(this.nameTf);


        this.anchor.set(.5);

        draggable(this, ()=>{
            onDragEndCallback(this.position.clone(), this);
        })
    }
}


