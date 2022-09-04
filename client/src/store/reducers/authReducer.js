import actionTypes from "../actions/actionTypes";
const initState = {
    isLoggedIn: false,
    current: {},
    msg: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: action.user ? true : false,
                current: action.user || {},
                msg: action.msg || ''
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                current: {},
                msg: ''
            };

        default:
            return state;
    }
}

export default authReducer