import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Products from "./components/Products";
import Swiperrr from "./components/Swiperr";

function App() {
  return (
    <>
      <Header/>
      <Swiperrr/>
      <Products />
    </>
  );
}

export default App;
