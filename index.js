const io = require('socket.io-client')
const socket = io('http://localhost:4001', {
  reconnectionDelayMax: 10000
})
socket.on('connect', () => {
    console.log(socket.id) // "G5p5..."
    console.log(socket.connected) // true
})

socket.on('Notification', (data) => {
    console.log(data)
    socket.emit('hi', 'everyone')
})

socket.on('error_channel/1/1', (data) => {
  console.log('8888888', data) // "G5p5..."
})
