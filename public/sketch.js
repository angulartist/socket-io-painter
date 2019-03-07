let socket

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0)

  socket = io.connect('http://localhost:3000')

  socket.on(
    'mouse',

    function(data) {
      fill(0, 0, 255)
      noStroke()
      ellipse(data.x, data.y, 20, 20)
    }
  )
}

function mouseDragged() {
  fill(255)
  noStroke()
  ellipse(mouseX, mouseY, 20, 20)

  sendmouse(mouseX, mouseY)
}

function sendmouse(xpos, ypos) {
  const data = {
    x: xpos,
    y: ypos
  }

  socket.emit('mouse', data)
}
