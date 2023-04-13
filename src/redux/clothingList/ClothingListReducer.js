import { AJOUTER_ARTICLE, LOAD_ARTICLE, LOAD } from "./type"

const initialStateClothingList = {
    dataClothingList: [],
    load: false,
    panier:[]
}

const clothingListReducer = (state = initialStateClothingList, action)=>{
    switch (action.type) {
        case AJOUTER_ARTICLE:
            const panierAjout = state.dataClothingList.find(i=>i.id === action.payload)
            const articleExiste = state.panier.find(i => i.id === action.payload)
            if(articleExiste){
                return state
            }
            return {
                ...state,
                // panier: state.panier.concat(panierSearch),
                panier: [...state.panier, panierAjout],
                load: false,
                dataClothingList:state.dataClothingList
            }
            
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