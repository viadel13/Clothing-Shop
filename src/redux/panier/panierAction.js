import { AJOUTER_ARTICLE, DELETE_ARTICLE } from "./type";

export const ajouterArticle = (idArticle, data) =>{
    return{
        type: AJOUTER_ARTICLE,
        payload : idArticle,
        dataDetails : data
    }
}
export const deleteArticle = (idArticle) =>{
    return{
        type: DELETE_ARTICLE,
        payload : idArticle
    }
}
