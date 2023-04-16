import {createStore, combineReducers, applyMiddleware} from 'redux';
import clothingListReducer from './clothingList/ClothingListReducer';
import detailClothingReducer from './detailsClothing/detailsClothingReducer';
import panierReducer from './panier/panierReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    clothingList: clothingListReducer,
    detailClothing: detailClothingReducer,
    panier: panierReducer

})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
