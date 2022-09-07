import actionTypes from './actionTypes'
import { apiGetUsers, apiGetUsersLimit } from '../../apis/user'

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
export const startConversation = ({ sender, receiver }) => ({
    type: actionTypes.START_CONVERSATION,
    sender,
    receiver
})
export const getGlobals = (payload) => async (dispatch) => {
    try {
        const response = await apiGetUsersLimit(payload)
        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.GET_GLOBALS,
                global: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_GLOBALS,
                msg: response.data.mes,
                global: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_GLOBALS,
            global: null,
            msg: error
        })
    }
}