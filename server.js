const io = require('socket.io')({
    path: '',
    serveClient: true
})

// either
const server = require('http').createServer()

io.attach(server, {
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
})

server.listen(4001)
setTimeout(() => {

}, 100)

io.sockets.on('connect', () => {
    console.log(io.sockets.id) // "G5p5..."
    console.log(io.sockets.connected) // true
    io.sockets.emit('hi', 'everyone')
})
