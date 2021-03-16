import * as dotenv from 'dotenv'
import * as path from 'path'
import * as _ from 'lodash'

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' })

const allowEnv: string[] = ['development', 'test', 'production']

process.env.NODE_ENV = process.env.NODE_ENV && allowEnv.includes((process.env.NODE_ENV).toLocaleLowerCase())
    ? (process.env.NODE_ENV).toLocaleLowerCase()
: 'development'

const ROOT = path.resolve(__dirname, '../')

export interface IConfig {
    server: {
        port: number | boolean,
        root: string
    };
    mqtt: {
        protocol: string,
        host: string,
        port: number | boolean
        username: string,
        password: string,
    };
    cors: {
        origin: string,
        credentials: boolean
        allowMethods: string[],
        exposeHeaders: string[],
        allowHeaders: string[]
    };
    nodeEnv: string;
    isTest: boolean;
    isProduction: boolean;
    isDevelopment: boolean;

}

const config: IConfig = {
    server: {
        port: normalizePort(_.defaultTo(process.env.PORT, 3000)),
        root: ROOT
    },
    mqtt: {
        protocol: _.defaultTo(process.env.MQTT_PROTOCOL, 'wxs'),
        host: _.defaultTo(process.env.MQTT_HOST, 'localhost'),
        port: normalizePort(_.defaultTo(process.env.MQTT_PORT, 5432)),
        username: _.defaultTo(process.env.MQTT_USERNAME, 'unimacs'),
        password: _.defaultTo(process.env.MQTT_PASSWORD, '123456')
    },
    cors: {
        origin: process.env.ORIGIN ? process.env.ORIGIN : 'http://localhost:8080',
        credentials: true,
        allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
        exposeHeaders: ['X-Request-Id'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept']
    },
    nodeEnv: process.env.NODE_ENV,
    isTest: !!(process.env.NODE_ENV === 'test' && process.env.NODE_TEST),
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production'
}

/**
 * Normalize port
 * @param val {string} value port
 */
export function normalizePort (val: string | number): number | boolean {
    const port: number = parseInt(val as string, 10)

    if (isNaN(port)) {
        return port
    }

    if (port >= 0) {
        return port
    }

    return false
}

export default config
