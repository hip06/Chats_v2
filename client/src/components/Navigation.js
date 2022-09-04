import React from 'react'
import { NavLink } from 'react-router-dom'
import menu from '../ultis/menu'
import { useSelector } from 'react-redux'

const Navigation = () => {
    const { current } = useSelector(state => state.auth)
    return (
        <div className='w-[75px] min-h-main flex-none bg-white shadow-md flex flex-col py-4 items-center justify-between'>
            <div className='flex flex-col justify-center gap-4'>
                {menu.map(item => {
                    return (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className={({ isActive }) => isActive ? 'text-purple-700' : ''}
                        >
                            {item.content}
                        </NavLink>
                    )
                })}
            </div>
            <img
                src="https://png.pngtree.com/png-clipart/20201223/ourlarge/pngtree-cute-girl-avatar-psd-png-image_2591771.jpg"
                alt="avatar"
                className='w-[30px] h-[30px] object-cover rounded-full border border-purple-700'
            />
        </div>
    )
}

export default Navigation