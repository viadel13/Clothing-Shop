import { DETAIL_CLOTHING } from "./type";

export const detailClothing = data =>{
    return{
        type: DETAIL_CLOTHING,
        payload : data
    }
}

export const showDatasDetails = (id, dataClothingList) =>{

    return (dispatch) =>{
        const dataFind = dataClothingList.find(i=>i.id === id)
        dispatch(detailClothing(dataFind))
        localStorage.setItem('detailClothingData', JSON.stringify(dataFind));

    }

}
