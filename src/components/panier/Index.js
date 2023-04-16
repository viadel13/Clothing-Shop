import { useSelector, useDispatch } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
import Header from "../header";
import Navbar from "../navbar";
import { showComponentDetail } from "../../redux/detailsClothing/detailsClothingAction";
import Footer from "../footer";
const Panier = () => {
  const data = useSelector((state) => state.panier);
  const dispacth = useDispatch();
  console.log(data);
  useEffect(() => {
    dispacth(showComponentDetail(true));
  }, [dispacth]);

  const articles = data.panier.map((i) => {
    return (
      <>
        <div className="row blocArt">
          <div className="col-6 col-md-6 col-lg-6 p-3">
            <div className="imageArticle">
              <span>
                <AiOutlineCloseCircle className="delete" />
              </span>
              <img src={i.image} alt={i.title} />
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-6 group">
            <div className="Qte">
              <div className="titre">
                <h2>{i.title}</h2>
              </div>
              <div className="nbreQte-prixQte">
                <div className="nbreQte">
                  <div> + </div>
                  <div> 1 </div>
                  <div> - </div>
                </div>
                <div className="prixQte mt-2">
                  <h2>$ {i.price}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="d-none d-lg-block d-md-block sticky-top">
        <Header />
      </div>
      <div className="d-lg-none d-md-none sticky-top">
        <Navbar />
      </div>
      <div className="container">
        <div className="pub">
          <h2>
            Felicitations!{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>40%</span>{" "}
            desactive{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>200$</span>{" "}
            economises,
            <br />
            Passez a la caisse maintenant
          </h2>
          <span className="ms-auto">
            <FaArrowRight className="arrow" />
          </span>
        </div>
      </div>
      <div className="container">{articles}</div>
      <div className="container">
        <div className="row detailsPrix">
          <div className="col-6 col-md-6 col-lg-6">
            <h2 className="Rab">Rabais</h2>
            <h2 className="Rab">Sous-Total:</h2>
          </div>
          <div className="col-6 col-md-6 col-lg-6 detailsPrixTotal">
            <h2 className="text-center">200$</h2>
            <h2 className="text-center">310$</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success fs-4">Verifier</button>
        </div>
      </div>
      <div className="d-md-none">
        <Footer />
      </div>
    </>
  );
};

export default Panier;
