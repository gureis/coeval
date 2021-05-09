import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const httpApp = express()
const port = process.env.PORT || 3030
const wpServer = http.createServer(httpApp)
const io = new Server(wpServer)

httpApp.get('/', (req, res) => {
    res.sendFile('index.html', {root: './public'})
})

io.on('connection', (socket) => {
    console.log(`user ${socket.id} connected`)
})

wpServer.listen(port, () => {
    return console.log(`Listening on port: ${port}`)
})
