import React, { useRef, useState, useEffect } from 'react'

const TypeText = () => {
    const inputMessageRef = useRef()
    const [message, setMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    useEffect(() => {
        inputMessageRef.current.innerText = 'Say something here ...'
    }, [])

    const handleSubmit = () => {
        console.log(inputMessageRef?.current.innerText)
        inputMessageRef.current.innerText = 'Say something here ...'
    }
    return (
        <div className='h-fit flex-none flex w-full border-t border-gray-300 p-4' >
            <div
                id='input-message'
                onFocus={() => {
                    inputMessageRef.current.innerText = ''
                    setIsTyping(true)
                }}
                onBlur={() => {
                    inputMessageRef.current.innerText = 'Say something here ...'
                    setIsTyping(false)
                }}
                ref={inputMessageRef}
                className={`flex-auto outline-none rounded-md bg-gray-200 p-2 ${!isTyping ? 'text-sm text-gray-600 italic' : ''}`}
                contentEditable
            >
            </div>
            <div className='flex-none w-20 p-4'>
                <button
                    type='button'
                    onClick={handleSubmit}
                >send</button>
            </div>
        </div>
    )
}

export default TypeText