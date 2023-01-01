import { useContext, createContext, useState } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartlist] = useState([])

    const agregarCarrito = (product) => {
        setCartlist([...cartList, product])

    }
    const vaciarCarrito = () => {
        setCartlist([])
    }


    return (
        <CartContext.Provider value={{ cartList, agregarCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}
