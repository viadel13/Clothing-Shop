import { DETAIL_CLOTHING } from "./type"

const initialStateDetailClothing = {
    detailClothing: [],
}

const detailClothingReducer = (state = initialStateDetailClothing, action)=>{
    switch (action.type) {
        case DETAIL_CLOTHING:
            return {
                ...state,
                detailClothing:action.payload 
            }
         
            
        default: return state
    }
}

export default detailClothingReducer;