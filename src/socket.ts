import { WebSocket, WebSocketServer } from 'ws'

type Reposition = {
  method: string
  id: number
  pose_x: number
  pose_z: number
  angle: number
}

export default function robSocket(ws: WebSocket, wsServer: WebSocketServer) {
  ws.on('message', (msg: string) => {
    if (!msg) return
    const { method, id, pose_x, pose_z, angle }: Reposition = JSON.parse(msg)

    if (method === 'reposition') {
      broadcast(
        JSON.stringify({
          method: 'newposition',
          id,
          pose_x,
          pose_z,
          angle,
        })
      )
    }
    if (method === 'newposition') console.log('newone')
  })

  function broadcast(msg: string): void {
    wsServer.clients.forEach((client) => {
      client.send(msg)
    })
  }
}
