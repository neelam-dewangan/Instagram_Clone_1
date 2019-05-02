import {createStore, combineReducers} from 'redux'
import UploadReducer from './Reducer/UploadReducer'

const rootReducer = combineReducers({
    UploadReducer
})

const store = createStore(rootReducer)
export default store;