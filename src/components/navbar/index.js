import { useState, useEffect } from "react";
import panier from "../../assets/images/panier.png";
import profil from "../../assets/images/profil.jpeg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [navbarBackground, setNavbarBackground] = useState(false);
  const nombreArticle = useSelector(state=>state.clothingList)

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== navbarBackground) {
        setNavbarBackground(isScrolled);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navbarBackground]);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${navbarBackground ? 'navbar-colored' : ''}`}>
      <div className="container navigation">
        <div className="panier-nav d-lg-none d-md-none ">
          <img src={panier} width="50px" alt="panier" />
          <span id="nbreArt-nav">{nombreArticle.panier.length}</span>
        </div>

        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-md-flex justify-content-md-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 flex-md-row mb-lg-0" id="ul-menu">
            <li className={activeLink === "all" ? "active-menu" : "nav-item menu"}>
              <Link className="nav-link" to="/" onClick={() => handleLinkClick("all")}>
                All
              </Link>
            </li>
            <li className={activeLink === "men" ? "active-menu" : "nav-item menu"}>
              <Link className="nav-link" to="/" onClick={() => handleLinkClick("men")}>
                Men’s clothing
              </Link>
            </li>
            <li className={activeLink === "women" ? "active-menu" : "nav-item menu"}>
              <Link className="nav-link" to="/" onClick={() => handleLinkClick("women")}>
                Women’s clothing
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 flex-md-row mb-lg-0" id='ul-menu-profil'>
            <li className= "nav-item li-profil">
              <Link className="nav-link" to="/">
                <img src={profil} id="profil" alt="profil"/>
              </Link>
              <span>Delvia</span>
            </li>
          </ul>
            <button className=" deconnecter">
              Se deconnecter
            </button>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
