import SocketIOConnection from '../socket'

export class SocketUtil {
    private static socket: any

    public static getSocket (): SocketIOConnection {
        if (!this.socket) {
            this.socket = new SocketIOConnection()
        }
        return this.socket
    }
}
