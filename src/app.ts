import express, { Request, Response } from 'express'
import ws from 'express-ws'
import cors from 'cors'
import dotenv from 'dotenv'

import router from './routes.js'
import { errorMiddleware } from './middleware.js'
import robSocket from './socket.js'

dotenv.config()

const port = Number(process.env.PORT) || 3001
const { app, getWss } = ws(express())
const wsServer = getWss()

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send("It's backend for the test task. Use /api endpoint to get to API, or /echo to get to web socket connection")
})
app.ws('/echo', (ws, req) => robSocket(ws, wsServer))
app.use('/api', router)
app.use(errorMiddleware)

app.listen(port, () => console.log(`[server] running on port ${port}`))
