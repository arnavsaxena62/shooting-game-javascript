/* draw the bullet*/
class bullet {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity 
    }
    Bulletdraw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

addEventListener('click', (event) => {
    const projectile = new bullet(event.clientX, event.clientY, 5, 'red', null)
    projectile.Bulletdraw()
}
)
