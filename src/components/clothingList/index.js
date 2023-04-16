import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { apiCall } from "../../redux/clothingList/ClothingListAction";
import { useNavigate } from "react-router-dom";
import {  showComponentDetail, showDatasDetails } from "../../redux/detailsClothing/detailsClothingAction";

const ClothingList = () => {
  const dispacth = useDispatch();
  const data = useSelector((state) => state.clothingList);
  
  // const load = useSelector((state) => state.clothingList.load);
  const navigate =useNavigate()
  // console.log(data);
 
  
  const callback = useCallback(() => {
    dispacth(apiCall());
  }, [dispacth]);
  
  useEffect(() => {
    callback();
  }, [callback]);

  useEffect(()=>{
    dispacth(showComponentDetail(false))
  },[dispacth])


  const acheterArticle = (id) =>{
    navigate("/DetailsClothing")
    dispacth(showDatasDetails(id, data.dataClothingList))  
    window.scrollTo(0, 0);
  }
  

  const showClothing = data.load ? (
    <p>Load</p>
  ) : (
    data.dataClothingList.map((i) => {
      return (
        <div
          className="col-6 col-md-6 col-lg-3 d-flex justify-content-center align-items-center"
          key={i.id}
        >
          <div className="article mt-5">
            <div className="image-article d-flex justify-content-center">
              <img src={i.image} alt={i.title} />
            </div>
            <div className="details-articles">
              <h3>
                {i.title.split(" ")[0]} {i.title.split(" ")[1]}
              </h3>
              <h4>${i.price}</h4>
              <button
                className="ajouter-art"
                onClick={() => acheterArticle(i.id)}
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      );
    })
  );

  return (
    <div className="container mt-5">
      <div className="row">{showClothing}</div>
    </div>
  );
};

export default ClothingList;
