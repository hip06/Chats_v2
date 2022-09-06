import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Navigation, Conversation } from '../components'
import path from '../ultis/path'
import socket from '../socket'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../store/actions'
const Home = () => {
    const { isLoggedIn, current } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        socket.on('connect', () => {
            current.id && socket.emit('connected', current.id, socket.id)
            socket.on('online-users', onlines => {
                const filtered = onlines?.filter(id => id !== current.id)
                dispatch(actions.getOnlines({ ids: filtered }))
            })
        })
    }, [socket, current.id])

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