import React from "react";
import Header from "../header";
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import Footer from "../footer";

const DetailsClothing = () => {
  const data = useSelector((state) => state.detailClothing );
  // console.log(data);
  const dataa = JSON.parse(localStorage.getItem('detailClothingData'));
  console.log(dataa)

  if(!data) return <div>Load ...</div>
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
              src={data.detailClothing.image ? data.detailClothing.image : dataa.image}
              className="img-fluid"
              alt={data.detailClothing.title ? data.detailClothing.title : dataa.title}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 detailsProd">
            {/* <h1>{data.detailClothing.category.toUpperCase()}</h1> */}
            <h1>{data.detailClothing.category ? data.detailClothing.category.toUpperCase(): dataa.category.toUpperCase()}</h1>
            {/* <h2>{data.detailClothing.title}</h2> */}
            <h2>{data.detailClothing.title ? data.detailClothing.title : dataa.rating.title}</h2>
            {/* <h3>Rating {data.detailClothing.rating.rate}</h3> */}
            <h3>Rating {data.detailClothing.rating ? data.detailClothing.rating.rate : dataa.rating.rate}</h3>
   
            <div className="py-3">
              {/* <h4>$ {data.detailClothing.price}</h4> */}
              <h4>$ {data.detailClothing.price ? data.detailClothing.price : dataa.price}</h4>
              {/* <p>{data.detailClothing.description}</p> */}
              <p>{data.detailClothing.description ? data.detailClothing.description : dataa.description}</p>
            </div>

            <button className="ajouter-art me-4">Ajouter panier</button>
            <button className="ajouter-art">Voir panier</button>
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <Footer />
      </div>
    </>
  );
};

export default DetailsClothing;
