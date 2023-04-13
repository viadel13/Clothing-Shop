import {createStore, combineReducers, applyMiddleware} from 'redux';
import clothingListReducer from './clothingList/ClothingListReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    clothingList: clothingListReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
