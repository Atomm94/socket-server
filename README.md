# socket-server (unimacs-socket)
Real-time Socket.IO + MQTT bridge that relays device events between field hardware and backend services in an access-control platform.

## Tech Stack
TypeScript · Socket.IO · MQTT · AMQP · Express · Docker

## Features
- Bidirectional Socket.IO gateway for connected clients
- MQTT subscriber/publisher for hardware device events
- AMQP integration for microservice message routing
- Dockerised for deployment alongside mqtt-dispatcher and microservices

## Related
Part of the MQTT-based access-control system:
- [mqtt-dispatcher](https://github.com/Atomm94/mqtt-dispatcher)
- [microservices](https://github.com/Atomm94/microservices)

## Getting Started
```bash
cp .env.sample .env
npm install
npm run dev
```