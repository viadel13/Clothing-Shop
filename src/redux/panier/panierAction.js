import { AJOUTER_ARTICLE } from "./type";

export const ajouterArticle = (idArticle, data) =>{
    return{
        type: AJOUTER_ARTICLE,
        payload : idArticle,
        dataDetails : data
    }
}
