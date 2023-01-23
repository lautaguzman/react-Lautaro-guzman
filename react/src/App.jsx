import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Titulo from "./components/Titulo/Titulo";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./container/CartContainer/CartContainer";
import { CartContextProvider } from "./Context/CartContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Titulo />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route
            path="/detalle/:productoId"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
