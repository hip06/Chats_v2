import axios from '../axios'

export const apiGetUsers = (ids) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/api/v1/user/',
            method: 'get',
            params: ids
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})