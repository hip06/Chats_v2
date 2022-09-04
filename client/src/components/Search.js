import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className='flex items-center'>
            <div className='bg-gray-200 rounded-tl-md w-[40px] flex-none rounded-bl-md h-[40px] flex items-center justify-center'>
                <BiSearch size={20} />
            </div>
            <input
                type="text"
                className=' py-2 bg-gray-200 rounded-tr-md rounded-br-md flex-auto outline-none'
                placeholder='Search messages or users'
            />
        </div>
    )
}

export default Search