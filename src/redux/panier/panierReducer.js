import { AJOUTER_ARTICLE } from "./type";

const initialStatePanier = {
  panier: []
};

const panierReducer = (state = initialStatePanier, action) => {
  switch (action.type) {
    case AJOUTER_ARTICLE:
        return{
            ...state,
            panier:[...state.panier, action.dataDetails]
        }

    //   const panierAjout = state.dataClothingList.find(
    //     (i) => i.id === action.payload
    //   );
    //   const articleExiste = state.panier.find((i) => i.id === action.payload);
    //   if (articleExiste) {
    //     return state;
    //   }
    //   return {
    //     ...state,
    //     panier: state.panier.concat(panierSearch),
    //     panier: [...state.panier, panierAjout]
    //   };

    default:
      return state;
  }
};

export default panierReducer