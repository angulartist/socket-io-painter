'use strict'

const PORT = 3000

const express = require('express')
const app = express()
const server = app.listen(PORT)
const io = require('socket.io').listen(server)

app.use(express.static('public'))

console.log('COOL!', PORT)

io.sockets.on('connection', startConnection)

function startConnection(socket) {
  console.log('Connected:', socket.id)

  socket.on('mouse', point => {
    socket.broadcast.emit('mouse', point)
  })
}
