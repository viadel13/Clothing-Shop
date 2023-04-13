import Accueil from "./components/accueil";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/footer";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <>
      <Provider store={store}>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <Header />
          <Navbar />
          <Accueil />
          <Footer />
        </SkeletonTheme>
      </Provider>
    </>
  );
}

export default App;
