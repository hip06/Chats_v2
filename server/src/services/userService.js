import db from '../models'


export const getUsers = (ids) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findAll({
            where: { id: ids },
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'OK' : 'User not found',
            response
        })
    } catch (error) {
        reject(error)
    }
})
export const getUsersLimit = (page, query) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findAll({
            where: query,
            offset: (+page - 1) * process.env.LIMIT || 0,
            limit: +process.env.LIMIT,
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'OK' : 'User not found',
            response
        })
    } catch (error) {
        reject(error)
    }
})