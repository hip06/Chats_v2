import React from 'react'
import { Search, User } from './'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const { onlines } = useSelector(state => state.user)

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-semibold mb-4'>Chats</h1>
            <Search />
            <div className='my-6'>
                <h3 className='font-medium'>Online users</h3>
                <div className='py-4'>
                    {onlines?.map(item => {
                        return (
                            <div key={item.id}>
                                <User
                                    username={item.username}
                                    fullname={item.fullname}
                                    avatar={item.avatar}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='my-6'>
                <h3 className='font-medium'>Recent</h3>
            </div>
        </div>
    )
}

export default Sidebar