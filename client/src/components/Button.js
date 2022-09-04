import React, { memo } from 'react'

const Button = ({ text, style, onClick }) => {
    return (
        <button
            type='button'
            className={`rounded-md px-4 py-2 ${style || ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default memo(Button)