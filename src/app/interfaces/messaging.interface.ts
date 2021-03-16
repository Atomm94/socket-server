import { OperatorType } from '../mqtt/Operators'

export interface ICrudMqttMessaging {
    operator: OperatorType
    topic: string
    message_id: string
    session_id: string
    update: boolean
    data: any
}

export interface IDeviceMqttMessaging {
    operator: OperatorType,
    message_id: string,
    session_id: string,
    info: any,
    result: {
        errorNo: number,
        description?: string
        time: number,
    }
}

export interface IMqttSocketMessaging {
    operator: OperatorType,
    device_topic: string,
    channel: string,
    company: number,
    device_id: number,
    data: any
}
