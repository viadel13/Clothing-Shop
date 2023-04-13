import { useState } from "react";
import panier from "../../assets/images/panier.png";
import profil from "../../assets/images/profil.jpeg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container navigation">
        <div className="panier-nav d-lg-none d-md-none ">
          <img src={panier} width="50px" alt="panier" />
          <span id="nbreArt-nav">1</span>
        </div>

        <button
          class="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-md-flex justify-content-md-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 flex-md-row mb-lg-0" id="ul-menu">
            <li className={activeLink === "all" ? "active-menu" : "nav-item menu"}>
              <a class="nav-link" href="#" onClick={() => handleLinkClick("all")}>
                All
              </a>
            </li>
            <li className={activeLink === "men" ? "active-menu" : "nav-item menu"}>
              <a class="nav-link" href="#" onClick={() => handleLinkClick("men")}>
                Men’s clothing
              </a>
            </li>
            <li className={activeLink === "women" ? "active-menu" : "nav-item menu"}>
              <a class="nav-link" href="#" onClick={() => handleLinkClick("women")}>
                Women’s clothing
              </a>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 flex-md-row mb-lg-0" id='ul-menu-profil'>
            <li className= "nav-item li-profil">
              <a class="nav-link" href="#">
                <img src={profil} id="profil" alt="profil"/>
              </a>
              <span>Delvia</span>
            </li>
          </ul>
            <button class=" deconnecter">
              Se deconnecter
            </button>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
