import authReducer from "./authReducer";
import userReducer from './userReducer'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

const common = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
    ...common,
    key: 'authentication',
    whitelist: ['isLoggedIn', 'current']
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer
})

export default rootReducer