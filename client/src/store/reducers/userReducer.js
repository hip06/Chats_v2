import actionTypes from "../actions/actionTypes";
const initState = {
    onlines: []
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ONLINES:
            return {
                ...state,
                onlines: action.users || []
            };

        default:
            return state;
    }
}

export default authReducer