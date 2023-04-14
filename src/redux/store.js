import {createStore, combineReducers, applyMiddleware} from 'redux';
import clothingListReducer from './clothingList/ClothingListReducer';
import detailClothingReducer from './detailsClothing/detailsClothingReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    clothingList: clothingListReducer,
    detailClothing: detailClothingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
