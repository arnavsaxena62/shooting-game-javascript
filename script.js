const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player{
    constructor(x,y,radius,color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    Playerdraw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle=this.color
        c.fill()
    }
}

const playerX = canvas.width/2
const playerY = canvas.height/2

const player = new Player(playerX,playerY,30,'blue')
player.Playerdraw()