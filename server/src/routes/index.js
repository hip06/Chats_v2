import authRouter from './authRouter'
import userRouter from './userRouter'


const initRoutes = (app) => {

    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/user', userRouter)

    return app.use('/', (req, res) => {
        return res.send('SERVER ON')
    })

}

export default initRoutes