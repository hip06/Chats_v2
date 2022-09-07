import actionTypes from "../actions/actionTypes";
const initState = {
    onlines: [],
    sender: null,
    receiver: null,
    global: []
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ONLINES:
            return {
                ...state,
                onlines: action.users || []
            };
        case actionTypes.START_CONVERSATION:
            return {
                ...state,
                sender: action.sender || null,
                receiver: action.receiver || null
            };
        case actionTypes.GET_GLOBALS:
            return {
                ...state,
                global: action.global || []
            };
        default:
            return state;
    }
}

export default authReducer