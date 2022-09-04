import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Navigation, Conversation } from '../components'
import { useSelector } from 'react-redux'
import path from '../ultis/path'
import socket from '../socket'
import { apiGetUsers } from '../apis/user'

const Home = () => {
    const { isLoggedIn, current } = useSelector(state => state.auth)
    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(() => {
        socket.on('connect', () => {
            socket.emit('connected', current.id, socket.id)
            socket.on('online-users', async (onlines) => {
                if (onlines) {
                    const response = await apiGetUsers({ ids: onlines })
                    if (response?.data.err === 0) {
                        setOnlineUsers(response.data.response)
                    }
                }
            })
        })
    }, [socket])

    // create user reducer

    if (!isLoggedIn) return <Navigate to={path.LOGIN} replace={true} />
    return (
        <div className='w-full min-h-main flex'>
            <Navigation />
            <div className='flex-none w-380'>
                <Outlet />
            </div>
            <Conversation />
        </div>
    )
}

export default Home