import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from '../components/accueil';
import DetailsClothing from '../components/detailsClothing/Index';
import ClothingList from '../components/clothingList';
import Panier from '../components/panier/Index';

const Rout = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/ClothingList' element={<ClothingList />} />
            <Route path='/DetailsClothing' element={<DetailsClothing />} />
            <Route path='/Panier' element={<Panier />} />
        </Routes>
    </Router>
  )
}

export default Rout
