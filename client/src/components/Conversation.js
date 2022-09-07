import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Header, Messages, TypeText } from './'
import { apiGetUsers } from '../apis/user'

const Conversation = () => {
    const { sender, receiver, onlines } = useSelector(state => state.user)
    const [receiverData, setReceiverData] = useState({})
    useEffect(() => {
        const fetchReceiver = async () => {
            const response = await apiGetUsers({ ids: receiver })
            if (response?.data.err === 0) setReceiverData(response.data.response[0])
        }
        fetchReceiver()
    }, [sender, receiver])
    return (
        <div className='bg-white min-h-main shadow-md w-full flex flex-col flex-auto'>
            <Header receiver={receiverData} status={onlines?.some(item => item.id === receiver) ? 'green' : 'orange'} />
            <Messages />
            <TypeText />
        </div>
    )
}

export default Conversation