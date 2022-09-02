import db from '../models'
import { v4 } from 'uuid'
import bcrypt from 'bcryptjs'

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(4))

export const register = ({ username, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: { username },
            defaults: {
                id: v4(),
                username,
                password: hashPassword(password)
            },
        })
        const user = response[1] && await db.User.findOne({
            where: { username },
            attributes: {
                exclude: ['password']
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Registed' : 'User has been used',
            response: user
        })
    } catch (error) {
        reject(error)
    }
})
export const login = ({ username, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { username },
            raw: true
        })
        let isCorrectPass = response && bcrypt.compareSync(password, response.password)
        response && delete response.password
        resolve({
            err: isCorrectPass ? 0 : 1,
            mes: isCorrectPass ? 'Logged in' : response ? 'Password invalid' : 'Account hasnt existed',
            response: isCorrectPass && response
        })
    } catch (error) {
        reject(error)
    }
})