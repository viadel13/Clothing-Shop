import { AJOUTER_ARTICLE, DELETE_ARTICLE } from "./type";

const initialStatePanier = {
  panier: []
};

const panierReducer = (state = initialStatePanier, action) => {
  switch (action.type) {
    case AJOUTER_ARTICLE:
      const articleExiste = state.panier.find( i=>i.id === action.payload)
      if(articleExiste){
        return state
      }
      return{
        ...state,
        panier:[...state.panier, action.dataDetails]
      }

    case DELETE_ARTICLE:
      const filterDel = state.panier.filter(i=>i.id !== action.payload)
      return{
        ...state,
        panier: filterDel
      }
    default:
      return state;
  }
};

export default panierReducer