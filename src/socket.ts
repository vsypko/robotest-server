import { WebSocket, WebSocketServer } from 'ws'

type Reposition = {
  method: string
  id: number
  x: number
  z: number
  angle: number
}

export default function robSocket(ws: WebSocket, wsServer: WebSocketServer) {
  ws.on('message', (msg: string) => {
    if (!msg) return
    const pos: Reposition = JSON.parse(msg)

    if (pos.method === 'reposition')
      // broadcast(JSON.stringify({ method: 'newposition', id: received.id, x: received.x, y: received.y }))
      ws.send(
        JSON.stringify({
          method: 'newposition',
          id: pos.id,
          x: pos.x,
          z: pos.z,
          angle: pos.angle,
        })
      )
    if (pos.method === 'newposition') console.log('newone')
  })

  function broadcast(msg: string): void {
    wsServer.clients.forEach((client) => {
      console.log(client)

      client.send(msg)
    })
  }
}
