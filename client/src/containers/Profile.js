import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsThreeDotsVertical, BsFillPersonFill } from 'react-icons/bs'
import { FaDotCircle } from 'react-icons/fa'
import moment from 'moment'
import { GrFormNext } from 'react-icons/gr'


const Profile = () => {
    const { current } = useSelector(state => state.auth)
    const [isShow, setIsShow] = useState(false)
    return (
        <div className='p-4 text-green-900 w-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Profile</h1>
                <span>
                    <BsThreeDotsVertical size={18} />
                </span>
            </div>
            <div className='p-4 flex items-center flex-col'>
                <img
                    src="https://png.pngtree.com/png-clipart/20201223/ourlarge/pngtree-cute-girl-avatar-psd-png-image_2591771.jpg"
                    alt="avatar"
                    className='w-[100px] h-[100px] object-cover rounded-full border-white border-4 my-4'
                />
                <div className='flex flex-col justify-center'>
                    <h4 className='font-medium'>{current.fullname || current.username}</h4>
                    <small className='flex items-center gap-1 justify-center'>
                        <FaDotCircle color='green' size={12} />
                        <span>active</span>
                    </small>
                </div>
            </div>
            <div className='bg-white border border-gray-100 rounded-md p-4 flex flex-col gap-4 mt-4 w-full'>
                <div onClick={() => setIsShow(prev => !prev)} className='flex items-center justify-between cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                        <BsFillPersonFill />
                        <span className='font-medium'>About</span>
                    </h4>
                    <GrFormNext />
                </div>
                {isShow && <div className='w-full flex flex-col gap-2'>
                    <span className=''>
                        <h5>Username</h5>
                        <span className='font-medium'>{current?.username}</span>
                    </span>
                    <span className='w-full'>
                        <h5>Fullname</h5>
                        <span className='font-medium'>{current?.fullname || 'None'}</span>
                    </span>
                    <span className='w-full'>
                        <h5>Created At</h5>
                        <span className='font-medium'>{moment(current?.createdAt).format('DD/MM/YYYY') || 'None'}</span>
                    </span>
                </div>}
            </div>
        </div>
    )
}

export default Profile