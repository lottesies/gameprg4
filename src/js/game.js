import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const capy = new Actor()
        capy.graphics.use(Resources.Capy.toSprite())
        capy.pos = new Vector(400, 300)
        capy.vel = new Vector(-10,0)
        this.add(capy)
    }
}

new Game()
