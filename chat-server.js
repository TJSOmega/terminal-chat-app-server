'use strict';

const io = require('socket.io')(3003);

require('dotenv').config()

const timeStamp = require('./tools/timestamp.js')

let users = []

io.on('connection', (socket) => {
  console.log(`${socket.id} Connected!`)

  

  socket.on('username', (payload) => {
    const time = timeStamp()
    console.log(`Welcome ${payload.username}! Joined at: ${time} `)
    socket.broadcast.emit('joining', payload.username)
    users.push(payload)
    console.log(users)
  })

  socket.on('message', (payload) => {
    console.log(payload)
    socket.broadcast.emit('message', payload)
  })

  
  socket.on('disconnect', (payload) => {
    const time = timeStamp()

    for (let i = 0; i < users.length; i++) {

      if (users[i].id === socket.id) {
        console.log(`${users[i].username} has left the chat at: ${time}`)
        socket.broadcast.emit('leaving', users[i])
        // delete users[i]
        console.log(users)
      }
    }
  });
  
});


