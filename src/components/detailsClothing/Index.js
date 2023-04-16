import { ajouterArticle } from "../../redux/panier/panierAction";
import Header from "../header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { useEffect } from "react";
import { showComponentDetail } from "../../redux/detailsClothing/detailsClothingAction";


const DetailsClothing = () => {
  const data = useSelector((state) => state.detailClothing);
  const datas = data.detailClothing
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const dataLocal = JSON.parse(localStorage.getItem("detailClothingData"));
  

  const ajouterPanier = (id) => {
    dispatch(ajouterArticle(id, datas || dataLocal));

  };

  const voirPanier = () =>{
    navigate('/panier')
  }

  useEffect(()=>{
   dispatch(showComponentDetail(true)) 
  }, [dispatch])

    return (
      <>
        <div className="d-none d-lg-block d-md-block sticky-top">
          <Header />
        </div>
        <div className="d-lg-none d-md-none sticky-top">
          <Navbar />
        </div>
  
        <div className="container mt-5">
          <div className="row contDetail">
            <div className="col-12 col-md-6 col-lg-6 image">
              <img
                src={
                  datas.image
                    ? datas.image
                    : dataLocal.image
                }
                className="img-fluid"
                alt={
                  datas.title
                    ? datas.title
                    : dataLocal.title
                }
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 detailsProd">
              {/* <h1>{data.detailClothing.category.toUpperCase()}</h1> */}
              <h1>
                {datas.category
                  ? datas.category.toUpperCase()
                  : dataLocal.category.toUpperCase()}
              </h1>
              {/* <h2>{data.detailClothing.title}</h2> */}
              <h2>
                {datas.title
                  ? datas.title
                  : dataLocal.rating.title}
              </h2>
              {/* <h3>Rating {data.detailClothing.rating.rate}</h3> */}
              <h3>
                Rating{" "}
                {datas.rating
                  ? datas.rating.rate
                  : dataLocal.rating.rate}
              </h3>
  
              <div className="py-3">
                {/* <h4>$ {data.detailClothing.price}</h4> */}
                <h4>
                  ${" "}
                  {datas.price
                    ? datas.price
                    : dataLocal.price}
                </h4>
                {/* <p>{data.detailClothing.description}</p> */}
                <p>
                  {datas.description
                    ? datas.description
                    : dataLocal.description}
                </p>
              </div>
  
              <button
                className="ajouter-art me-4"
                onClick={() => {
                  const id = datas.id
                    ? datas.id
                    : dataLocal.id;
                  ajouterPanier(id);
                }}
              >
                Ajouter au panier
              </button>
  
              <button className="ajouter-art" onClick={voirPanier}>Voir panier</button>
            </div>
          </div>
        </div>
        <div className="d-md-none">
          <Footer />
        </div>
      </>
    )

 
};

export default DetailsClothing;
