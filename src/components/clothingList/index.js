import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiCall } from "../../redux/clothingList/ClothingListAction";
import { ajouterArticle } from "../../redux/clothingList/ClothingListAction";

const ClothingList = () => {
  const dispacth = useDispatch();
  const data = useSelector((state) => state.clothingList);
  const load = useSelector((state) => state.clothingList.load);

  console.log(data);

  useEffect(() => {
    dispacth(apiCall());
  }, [apiCall]);

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
                id="ajouter-art"
                onClick={() => dispacth(ajouterArticle(i.id))}
              >
                Ajouter
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
