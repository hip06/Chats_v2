import express from 'express'
import * as controllers from '../controllers'

const router = express.Router()

router.get('/', controllers.getUsers)
router.get('/limit', controllers.getUsersLimit)

export default router