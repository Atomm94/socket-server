import { IMqttSocketMessaging } from '../interfaces/messaging.interface'
import { SocketUtil } from '../services/socketUtil'
import { socketChannels } from '../enums/socketChannels.enum'

const socket = SocketUtil.getSocket()

export default class Parse {
    public static mqttData (topic: string, data: string) {
        const message: IMqttSocketMessaging = JSON.parse(data)
        // message.location = message.device_topic.split('/').slice(0, 2).join('/')
        // message.company = Number(message.device_topic.split('/')[1])
        // message.device_id = Number(message.device_topic.split('/')[3])
        switch (message.channel) {
            // case OperatorType.NOTIFICATION:
            //     this.notification(message)
            //     break
            case socketChannels.DASHBOARD_ACU:
                this.changeAcuStatus(message)
                break
            case socketChannels.DASHBOARD_ACCESS_POINT_MODES:
                this.changeAccessPointModes(message)
                break
            case socketChannels.DASHBOARD_MONITOR:
                this.accessPointMonitor(message)
                break
            case socketChannels.DASHBOARD_ACTIVITY:
                this.activity(message)
                break
            case socketChannels.DASHBOARD_EVENT_STATISTIC:
                this.eventStatistic(message)
                break
            default:
                break
        }
    }

    public static async notification (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error notification ', error)
        }
    }

    public static async changeAcuStatus (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error changeAcuStatus ', error)
        }
    }

    public static async changeAccessPointModes (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error changeAccessPointModes ', error)
        }
    }

    public static async accessPointMonitor (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error accessPointMonitor ', error)
        }
    }

    public static async activity (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error activity ', error)
        }
    }

    public static async eventStatistic (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error eventStatistic ', error)
        }
    }
}
