import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import routineReducer from './routineReducer'
import resultReducer from './resultReducer'

const rootReducer =  combineReducers({
    auth: authReducer,
    project: projectReducer,
    routine:routineReducer,
    result:resultReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer
