import React from 'react'
import { Search } from './'

const Sidebar = () => {

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-semibold mb-4'>Chats</h1>
            <Search />
            <div className='my-6'>
                <h3 className='font-medium'>Online users</h3>
            </div>
            <div className='my-6'>
                <h3 className='font-medium'>Recent</h3>
            </div>
        </div>
    )
}

export default Sidebar