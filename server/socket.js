require('dotenv').config()
import socket from 'socket.io'

const handleSocket = (server) => {
    const io = socket(server, {
        cors: {
            origin: process.env.CLIENT_URL
        }
    })
    let onlineUsers = []
    const addUser = userId => {
        if (!onlineUsers.some(item => item === userId)) {
            onlineUsers = [...onlineUsers, userId]
        }
    }
    const deleteUser = userId => {
        onlineUsers = onlineUsers.filter(item => item !== userId)
    }

    io.on('connection', socket => {
        socket.on('connected', (userId, socketId) => {
            addUser(userId)
            io.emit('online-users', onlineUsers)



            socket.on('disconnect', () => {
                deleteUser(userId)
                io.emit('online-users', onlineUsers)
            })
        })
    })

}

export default handleSocket