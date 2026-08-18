import { createContext, useContext } from "react";
import { initialProducts } from "../data/product";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const products = initialProducts
    return(
        <CartContext value={{products}}>{children}</CartContext>
    )
}

export const useCart = () => useContext(CartContext)


