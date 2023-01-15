import { useContext, createContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartlist] = useState([]);

  const agregarCarrito = (product) => {
    const idx = cartList.findIndex((prod) => prod.id == product.id);

    if (idx !== -1) {
      // cartList[idx].cantidad = cartList[idx].cantidad + product.cantidad
      cartList[idx].cantidad += product.cantidad;
      setCartlist([...cartList]);
    } else {
      setCartlist([...cartList, product]);
    }
  };
  const precioTotal = () =>
    cartList.reduce(
      (contador, producto) => (contador += producto.precio * producto.cantidad),
      0
    );

  const cantidadTotal = () =>
    cartList.reduce((contador, producto) => (contador += producto.cantidad), 0);

  const vaciarCarrito = () => {
    setCartlist([]);
  };

  const eliminarPorItem = (id) => {
    setCartlist(cartList.filter((prod) => prod.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        precioTotal,
        cantidadTotal,
        eliminarPorItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
