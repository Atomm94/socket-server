// import * as http from 'http'
import app from '../app'
import socketio from 'socket.io';
let io = socketio(app);
// var server = require('http').createServer(app.callback())
// import app from '../app'
// import express from 'express'

export default class SocketIOConnection {
    private io: any;

    initSocket() {
        this.io = io
        this.io.on('connection', function (socket: any) {
            console.log('a user connected');
            // whenever we receive a 'message' we log it out
            // socket.on('message', function (message: any) {
            //     console.log(message);
            // });
        });
    }

    sendSocket(ch: string, data: any, room: any = null) {
        if (!room) {
            this.io.socket.emit(ch, data)
        } else {
            this.io.to(room).emit(ch, data)
        }
    }

    listenSocket(ch: string) {
        this.io.on(ch, (ctx: any, data: any) => {
            // console.log('ctx.data', ctx.data)
            console.log('data', data)
            console.log('ctx.socket.rooms', this.io.socket)
            ctx.socket.emit(ch, data)
        })
    }
}
