import { OperatorType } from './Operators'
import { IMqttSocketMessaging } from '../interfaces/messaging.interface'
import { SocketUtil } from '../services/socketUtil'
const socket = SocketUtil.getSocket()

export default class Parse {
    public static mqttData (topic: string, data: string) {
        const message: IMqttSocketMessaging = JSON.parse(data)
        // message.location = message.device_topic.split('/').slice(0, 2).join('/')
        // message.company = Number(message.device_topic.split('/')[1])
        // message.device_id = Number(message.device_topic.split('/')[3])
        switch (message.operator) {
            case OperatorType.NOTIFICATION:
                this.notification(message)
                break

            default:
                break
        }
    }

    public static async notification (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error deviceRegistrion ', error)
        }
    }
}
