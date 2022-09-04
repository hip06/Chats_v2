import React, { memo } from 'react'

const InputField = ({ type, value, setValue, label, code }) => {
    return (
        <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="input" className='font-medium'>{label}</label>
            <input
                type={type || 'text'}
                className='outline-none bg-blue-400 px-4 py-2 rounded-md w-full placeholder:text-gray-300 placeholder:text-sm placeholder:italic'
                id="input"
                value={value}
                onChange={((e) => {
                    setValue(prev => ({ ...prev, [code]: e.target.value }))
                })}
                placeholder={`Type ${label.toLowerCase()} here ...`}
            />
        </div>
    )
}

export default memo(InputField)