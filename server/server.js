import express from 'express'
import cors from 'cors'
import socket from 'socket.io'
require('dotenv').config()
import initRoutes from './src/routes'
import connect from './src/config/connect'

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connect()
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on the port: ${server.address().port}`)
})

// const io = socket(server, {
//     cors: {
//         origin: process.env.CLIENT_URL
//     }
// })