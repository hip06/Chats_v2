import React from 'react'
import anon from '../assets/anon-avatar.png'

const User = ({ username, avatar }) => {
    return (
        <div className='cursor-pointer p-2 flex justify-between hover:bg-gray-300 rounded-md' >
            <div className='flex items-center gap-3 '>
                <img src={anon} alt="avatar" className='w-8 h-8 rounded-full object-cover' />
                <div className='flex flex-col justify-center'>
                    <span className='font-medium'>{username}</span>
                    <span className='text-gray-600'>message...</span>
                </div>
            </div>
            <span className='text-xs text-gray-600 py-2'>02:05</span>
        </div>
    )
}

export default User