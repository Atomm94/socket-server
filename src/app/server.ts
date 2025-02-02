// import * as express from 'express'
// const app = express();

import app from './app'
import * as dotenv from 'dotenv'

import { SocketUtil } from './services/socketUtil'
import MQTTBroker from './mqtt/mqtt'

dotenv.config({ path: '.env' })
// const SocketUtilObj = new SocketUtil()

const socket = SocketUtil.getSocket()
const serverPort: any = process.env.SERVER_PORT ? process.env.SERVER_PORT : 4001;

// TypeORM creates you connection pull to uses connections from pull on your requests
(async () => {
    try {
        await socket.initSocket()
        await MQTTBroker.init()
        app.listen(
            serverPort, () => console.log('APP listening at port %d ', serverPort)
        )
        process.on('SIGINT', async () => {
            try {
                process.exit(0)
            } catch (e) {
                process.exit(1)
            }
        })
    } catch (e) { console.log(e) }
})()
