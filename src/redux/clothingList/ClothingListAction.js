import { LOAD_ARTICLE, LOAD } from "./type";
import axios from 'axios'


export const loadArticle = dataApi =>{
    return{
        type: LOAD_ARTICLE,
        payload: dataApi 
    }
}

export const load = () =>{
    return{
        type: LOAD
    }
}

export const apiCall = () =>{

    return dispacth =>{

        dispacth((load()))

        axios.get('https://fakestoreapi.com/products/')
        .then(response=>{
            const filter = response.data.filter((i)=>i.category === 'men\'s clothing' || i.category === 'women\'s clothing')
            dispacth(loadArticle(filter))
        })
        .catch(error=>{
    
        })
    }
   
}
