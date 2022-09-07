import React from 'react'
import anon from '../assets/anon-avatar.png'
import { GoPrimitiveDot } from 'react-icons/go'

const Header = ({ receiver, status }) => {
    return (
        <div className='h-[70px] flex flex-none items-center p-4 border-b border-gray-300'>
            <div className='flex items-center gap-4'>
                <img src={receiver?.avatar || anon} alt="avatar" className='w-10 h-10 rounded-full object-cover' />
                <span className='font-semibold flex gap-1 items-center'>{receiver?.fullname || receiver?.username}<GoPrimitiveDot color={status || 'gray'} /></span>

            </div>
        </div>
    )
}

export default Header