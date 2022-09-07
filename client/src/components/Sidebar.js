import React, { useEffect } from 'react'
import { Search, User } from './'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../store/actions'

const Sidebar = () => {
    const { onlines, global } = useSelector(state => state.user)
    const { current } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getGlobals())
    }, [])
    return (
        <div className='p-4'>
            <h1 className='text-2xl font-semibold mb-4'>Chats</h1>
            <Search />
            <div className='my-6'>
                <h3 className='font-medium'>ONLINES</h3>
                <div className='py-4'>
                    {onlines?.map(item => {
                        return (
                            <div key={item.id} onClick={() => dispatch(actions.startConversation({ sender: current.id, receiver: item.id }))} >
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
                <h3 className='font-medium'>GLOBAL</h3>
                <div className='py-4'>
                    {global?.map(item => {
                        return (
                            <div key={item.id} onClick={() => dispatch(actions.startConversation({ sender: current.id, receiver: item.id }))} >
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
        </div>
    )
}

export default Sidebar