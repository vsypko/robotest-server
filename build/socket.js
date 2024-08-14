export default function robSocket(ws, wsServer) {
    ws.on('message', (msg) => {
        if (!msg)
            return;
        const pos = JSON.parse(msg);
        if (pos.method === 'reposition')
            ws.send(JSON.stringify({
                method: 'newposition',
                id: pos.id,
                x: pos.x,
                z: pos.z,
                angle: pos.z,
            }));
        if (pos.method === 'newposition')
            console.log('newone');
    });
    function broadcast(msg) {
        wsServer.clients.forEach((client) => {
            console.log(client);
            client.send(msg);
        });
    }
}
//# sourceMappingURL=socket.js.map