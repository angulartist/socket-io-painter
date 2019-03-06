let socket

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(51)

  socket = io.connect('http://localhost:3000')
  socket.on('mouse', doDraw)
}

function doDraw(point) {
  noStroke()
  fill(255, 0, 89)
  ellipse(point.x, point.y, 36, 36)
}

function mouseDragged() {
  const point = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', point)
}

function draw() {
  noStroke()
  ellipse(mouseX, mouseY, 36, 36)
}
