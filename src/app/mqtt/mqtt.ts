import { connect } from 'mqtt'
import config from '../../config'
import MessageHandler from './MessageHandler'
import { ReceiveTopics } from './Topics'

export default class MQTTBroker {
    public static client: any = null
    public static async init () {
        this.client = connect(config.mqtt)
        return await new Promise((resolve, reject) => {
            this.client.on('connect', (status: any) => {
                console.log('MQTT server connected successfully!')
                this.subscribeAll()
                resolve(status)
            })
            this.client.on('error', (err: any) => {
                if (err) {
                    console.log('', err)
                    // eslint-disable-next-line prefer-promise-reject-errors
                    reject('MQTT connection timed out!')
                }
            })
        })
    }

    public static publishMessage (topic: string, msg: string): void {
        console.log('publishMessage topic', topic, msg)
        this.client.publish(topic, msg, (error: any) => {
            if (error) console.log('publish error', error)
        })
    }

    public static subscribe (topic: string | number) {
        this.client.subscribe(topic, (err: any) => {
            if (err) console.log('subscribe error', err)
        })
    }

    public static getMessage (callback: Function) {
        this.client.on('message', function (topic: string, message: string) {
            if (topic && message) {
                return callback(topic, message.toString())
            }
        })
    }

    private static subscribeAll () {
        const topicList = Object.values(ReceiveTopics)
        for (let i = 0; i < topicList.length; i++) {
            const topic = topicList[i]
            this.client.subscribe(topic, (err: any) => {
                if (err) {
                    console.log('topic subscription error', err)
                } else {
                    console.log(`Topic "${topic}" subscription success`)
                }
            })
        }
        // eslint-disable-next-line no-new
        new MessageHandler()
    }
}
