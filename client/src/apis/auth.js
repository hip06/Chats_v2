import axios from '../axios'

export const apiLogin = (data) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/api/v1/auth/login',
            method: 'post',
            data
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})