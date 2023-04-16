import panier from "../../assets/images/panier.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nombreArticle = useSelector(state=>state.panier)
  const navigate = useNavigate()

  const voirPanier = ()=>{
    navigate('/panier')
  }
  return (
    <div className="container-fluid" id="header">
      <div className="titre">
        <h1 className="text-center">
          CLOTHING SHOP
          <span id='panier'>
            <img src={panier} alt="panier"  className="d-none d-lg-block d-md-block" onClick={voirPanier} />
            <span id='nbreArt'  className="d-none d-lg-block d-md-block">{nombreArticle.panier.length}</span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
