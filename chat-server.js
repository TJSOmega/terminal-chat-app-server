'use strict';

const io = require('socket.io')(3002);


io.on('connection', (socket) =>{
  console.log('Client Connected!')
  socket.on('message', (payload) =>{
    console.log(payload)
    socket.broadcast.emit('message', payload)
  })
});


io.on('disconnect', (payload) =>{
  console.log('Client Disconnected')
});