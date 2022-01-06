import * as PIXI from "pixi.js";
import {Player} from "./components/Player";
import {Pitch} from "./components/Pitch";

const WIDTH = 400,
    HEIGHT = 700;
export class PIXILineup {

    constructor(view, {lineup = [], onLineupChange} = {}) {
        this.app = new PIXI.Application({
            backgroundColor : 0x000000,
            width : WIDTH,
            height : HEIGHT,
            view
        });
        this._players = [];


        this.onLineupChangeCallback =  typeof onLineupChange == 'function' ? onLineupChange : ()=>{}

        this.load()
            .then(()=>this.init(lineup))
      }

    get stage(){
        return this.app.stage;
    }

    _addPlayer({id, name, pos}){
        const player = new Player(id, name, this._onPlayerDragEnd.bind(this))
        this._players.push(player);
        this.stage.addChild(player);
        player.position = PIXILineup.positionTranslateFrom(pos)
        return player;
    }

    load(){
        const loader = PIXI.Loader.shared;

        return  new Promise((resolve, reject)=>{
            loader
                .add('kit', 'pngwing.com.png')
                .load(resolve)

            loader.onError.add(reject)
        })
    }

    init(lineup = []){
        this.stage.addChild(new Pitch());

        lineup.forEach(this._addPlayer.bind(this))
    }


    _onPlayerDragEnd(pos, player){
        // this.onLineupChangeCallback();
    }

    static positionTranslateFrom([x, y]){
        return new PIXI.Point(WIDTH * x / 100, HEIGHT * y / 100)
    }

    static positionTranslateTo({x, y}){
        return [x / WIDTH * 100 , y / HEIGHT * 100];
    }
}

