import { DETAIL_CLOTHING, SHOW_COMPONENT_DETAIL } from "./type";

export const detailClothing = data =>{
    return{
        type: DETAIL_CLOTHING,
        payload : data
    }
}

export const showComponentDetail = (param) =>{
    return{
        type: SHOW_COMPONENT_DETAIL,
        payload : param 
    }
}

export const showDatasDetails = (id, dataClothingList) =>{

    return (dispatch) =>{
        const dataFind = dataClothingList.find(i=>i.id === id)
        dispatch(detailClothing(dataFind))
        localStorage.setItem('detailClothingData', JSON.stringify(dataFind));

    }

}
