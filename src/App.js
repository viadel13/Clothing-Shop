import { Provider } from "react-redux";
import store from "./redux/store";
import Rout from "./routes/Index";

function App() {

  return (
    <>
      <Provider store={store}>
          <Rout />
      </Provider>
    </>
  );
}

export default App;
