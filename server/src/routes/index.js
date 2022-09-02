import authRouter from './authRouter'


const initRoutes = (app) => {

    app.use('/api/v1/auth', authRouter)

    return app.use('/', (req, res) => {
        return res.send('SERVER ON')
    })

}

export default initRoutes