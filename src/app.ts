import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import router from './routes.js'
import errorMiddleware from './middleware.js'
import robSocket from './socket.js'
import ws from 'express-ws'

dotenv.config()

const port = Number(process.env.PORT) || 3001
const { app, getWss } = ws(express())
const wsServer = getWss()

app.ws('/echo', (ws, req) => robSocket(ws, wsServer))

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorMiddleware)

app.listen(port, () => console.log(`[server] running on port ${port}`))
