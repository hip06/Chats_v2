require('dotenv').config()
import socket from 'socket.io'

const handleSocket = (server) => {
    const io = socket(server, {
        cors: {
            origin: process.env.CLIENT_URL
        }
    })
    const onlineUsers = []
    const updateOnline = (userId) => {
        let el = onlineUsers.find(i => i === userId)
        return el ? onlineUsers.splice(onlineUsers.indexOf(el), 1) : onlineUsers.push(userId)
    }

    io.on('connection', socket => {
        socket.on('connected', (userId, socketId) => {
            updateOnline(userId)
            socket.emit('online-users', onlineUsers)



            socket.on('disconnect', () => {
                updateOnline(userId)
            })
        })
    })

}

export default handleSocket