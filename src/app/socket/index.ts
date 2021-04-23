// import * as http from 'http'
import app from '../app'
import socketio from 'socket.io'
const io = socketio(app)
// var server = require('http').createServer(app.callback())
// import app from '../app'
// import express from 'express'

export default class SocketIOConnection {
    public io: any;
    public socket: any;

    initSocket () {
        this.io = io

        this.io.on('connection', function (socket: any) {
            console.log('a user connected')
        })
    }

    sendSocket (ch: string, data: string, room: any = null) {
        if (!room) {
            console.log(ch)

            this.io.sockets.emit(ch, data)
        } else {
            this.io.to(room).emit(ch, data)
        }
    }

    listenSocket (ch: string, cb:Function) {
        this.io.sockets.on(ch, cb)
    }
}
