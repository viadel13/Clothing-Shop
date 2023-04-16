import { DETAIL_CLOTHING, SHOW_COMPONENT_DETAIL } from "./type"

const initialStateDetailClothing = {
    detailClothing: [],
    openDetails: false

}

const detailClothingReducer = (state = initialStateDetailClothing, action)=>{
    switch (action.type) {
        case DETAIL_CLOTHING:
            return {
                ...state,
                detailClothing:action.payload,
            }
        case SHOW_COMPONENT_DETAIL:
          
            return{
                ...state,
                openDetails: action.payload
            }
         
            
        default: return state
    }
}

export default detailClothingReducer;