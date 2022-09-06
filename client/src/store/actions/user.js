import actionTypes from './actionTypes'
import { apiGetUsers } from '../../apis/user'

export const getOnlines = (ids) => async (dispatch) => {
    try {
        const response = await apiGetUsers(ids)
        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ONLINES,
                users: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_ONLINES,
                msg: response.data.mes,
                users: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ONLINES,
            users: null,
            msg: error
        })
    }
}