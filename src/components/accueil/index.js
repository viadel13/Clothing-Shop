import ClothingList from "../clothingList";
import Header from "../header";
import Navbar from "../navbar";


const Accueil = () => {

  return (
    <>
      <Header />
      <Navbar />
      <div className=" container d-none d-lg-block d-md-block titre-cat mt-4">
        <h1 className="text-center">ALL</h1>
      </div>
      <div className="titre-cat-mobile d-lg-none d-md-none mt-4">
        <h1>ALL</h1>
      </div>
      <ClothingList />

    </>
  );
};

export default Accueil;
