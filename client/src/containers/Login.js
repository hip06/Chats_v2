import React, { useState, useCallback, useEffect } from 'react'
import { TbMessage } from 'react-icons/tb'
import { InputField, Button } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [payload, setPayload] = useState({
        username: '',
        password: '',
        password2: ''
    })
    const [isLogin, setIsLogin] = useState(true)
    const { isLoggedIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = useCallback(async () => {
        const finalPayload = isLogin ? { username: payload.username, password: payload.password } : payload
        isLogin ? dispatch(actions.login(finalPayload)) : console.log(finalPayload);
    }, [payload])
    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])
    return (
        <div className='min-h-main flex items-center'>
            <div className='w-2/5 bg-gradient-to-r flex-col gap-4 from-violet-500 text-white flex justify-center items-center to-fuchsia-500 min-h-main'>
                <TbMessage size={100} />
                <div className='flex justify-center flex-col items-center'>
                    <h1 className='font-bold text-[48px]'>Welcome</h1>
                    <h3 className='text-blue-200'>Chat application version 2</h3>
                </div>
            </div>
            <div className='w-3/5 flex flex-col justify-center items-center gap-4'>
                <h1 className='font-bold text-[40px] py-4'>{isLogin ? 'Login' : 'Register'}</h1>
                <InputField
                    label='Username'
                    value={payload.username}
                    setValue={setPayload}
                    code='username'
                />
                <InputField
                    label='Password'
                    value={payload.password}
                    setValue={setPayload}
                    type='password'
                    code='password'
                />
                {!isLogin && <InputField
                    label='Confirmed password'
                    value={payload.password2}
                    setValue={setPayload}
                    type='password'
                    code='password2'
                />}
                <Button
                    text={isLogin ? 'Login' : 'Sign Up'}
                    style='text-white bg-red-500 w-1/2 my-4'
                    onClick={handleSubmit}
                />
                <small onClick={e => {
                    setIsLogin(prev => !prev)
                    setPayload({
                        username: '',
                        password: '',
                        password2: ''
                    })
                }}
                    className='text-blue-500 hover:underline cursor-pointer'
                >
                    {isLogin ? 'Go register' : 'Go login'}
                </small>
            </div>
        </div>
    )
}

export default Login