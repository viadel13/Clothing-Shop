import { LOAD_ARTICLE, LOAD } from "./type"

const initialStateClothingList = {
    dataClothingList: [],
    load: false
}

const clothingListReducer = (state = initialStateClothingList, action)=>{
    switch (action.type) {
        case LOAD:
            return{
                ...state,
                load: true
            }

        case LOAD_ARTICLE:
            return{
                ...state,
                dataClothingList: action.payload,
                load: false
            }
            
        default: return state
    }
}

export default clothingListReducer;