import panier from "../../assets/images/panier.png";

const Header = () => {
  return (
    <div className="container-fluid" id="header">
      <div className="titre">
        <h1 className="text-center">
          CLOTHING SHOP
          <span id='panier'>
            <img src={panier} alt="panier"  className="d-none d-lg-block d-md-block"/>
            <span id='nbreArt'  className="d-none d-lg-block d-md-block">1</span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
