import actionTypes from './actionTypes'
import { apiLogin } from '../../apis/auth'

export const login = (data) => async (dispatch) => {
    try {
        const response = await apiLogin(data)
        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.LOGIN,
                user: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.LOGIN,
                msg: response.data.mes,
                user: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN,
            user: null,
            msg: error
        })
    }
}
export const logout = () => ({
    type: actionTypes.LOGOUT
})