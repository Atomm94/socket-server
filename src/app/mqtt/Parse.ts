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
        message.full_socket_channel = `${message.channel}/${message.company}`
        if (message.user) {
            message.full_socket_channel += `/${message.user}`
        }
        switch (message.channel) {
            case socketChannels.NOTIFICATION:
                this.notification(message)
                break
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
            case socketChannels.DASHBOARD_CLOUD_STATUS:
                this.cloudStatus(message)
                break
            case socketChannels.DASHBOARD_DOOR_STATE:
                this.doorState(message)
                break

            case socketChannels.DASHBOARD_CARDHOLDERS_PRESENSE:
                this.cardholdersPresense(message)
                break
            case socketChannels.ERROR_CHANNEL:
                this.errorChannel(message)
                break
            case socketChannels.READER_DELETE:
                this.readerDelete(message)
                break
            case socketChannels.READER_UPDATE:
                this.readerUpdate(message)
                break
            case socketChannels.EXT_BRD_DELETE:
                this.extBrdDelete(message)
                break
            case socketChannels.EXT_BRD_UPDATE:
                this.extBrdUpdate(message)
                break
            case socketChannels.ACCESS_POINT_UPDATE:
                this.accessPointUpdate(message)
                break
            case socketChannels.GUEST_SET_KEY:
                this.guestSetKey(message)
                break
            default:
                break
        }
    }

    public static async notification (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error notification ', error)
        }
    }

    public static async changeAcuStatus (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error changeAcuStatus ', error)
        }
    }

    public static async changeAccessPointModes (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error changeAccessPointModes ', error)
        }
    }

    public static async accessPointMonitor (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error accessPointMonitor ', error)
        }
    }

    public static async activity (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error activity ', error)
        }
    }

    public static async eventStatistic (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error eventStatistic ', error)
        }
    }

    public static async cloudStatus (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error cloudStatus ', error)
        }
    }

    public static async doorState (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error doorState ', error)
        }
    }

    public static async cardholdersPresense (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error cardholdersPresense ', error)
        }
    }

    public static async errorChannel (message: IMqttSocketMessaging) {
        try {
            socket.sendSocket(message.full_socket_channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error errorChannel ', error)
        }
    }

    public static async readerDelete (message: IMqttSocketMessaging) {
        try {
            const channel = `${message.full_socket_channel}/acu/${message.data.access_points.acus.id}`
            socket.sendSocket(channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error readerDelete ', error)
        }
    }

    public static async readerUpdate (message: IMqttSocketMessaging) {
        try {
            const channel = `${message.full_socket_channel}/acu/${message.data.access_points.acus.id}`
            socket.sendSocket(channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error readerUpdate ', error)
        }
    }

    public static async extBrdDelete (message: IMqttSocketMessaging) {
        try {
            const channel = `${message.full_socket_channel}/acu/${message.data.acus.id}`
            socket.sendSocket(channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error extBrdDelete ', error)
        }
    }

    public static async extBrdUpdate (message: IMqttSocketMessaging) {
        try {
            const channel = `${message.full_socket_channel}/acu/${message.data.acu}`
            socket.sendSocket(channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error extBrdUpdate ', error)
        }
    }

    public static async accessPointUpdate (message: IMqttSocketMessaging) {
        try {
            const channel = `${message.full_socket_channel}/acu/${message.data.acus.id}`
            socket.sendSocket(channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error accessPointUpdate ', error)
        }
    }

    public static async guestSetKey (message: IMqttSocketMessaging) {
        try {
            const channel = message.full_socket_channel
            socket.sendSocket(channel, JSON.stringify(message.data))
        } catch (error) {
            // console.log('error guestSetKey ', error)
        }
    }
}
