import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation, Conversation } from '../components'
const Home = () => {
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