import { createContext, useContext, useMemo, useState } from "react";
import { initialProducts } from "../data/product";
import { toast, Flip } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const products = initialProducts

    //add products to cart
    const addToCart = (product) => {
        toast.success('Item is added to cart!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
        });
        setCart((prvsCart) => {
            const existingItem = prvsCart.find(item => item.id === product.id)
            if (existingItem) {
                return prvsCart.map(item => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item)
            } else {
                return [...prvsCart, { ...product, quantity: 1 }]
            }
        })
    }

    //remove product from cart
    const removeFromCart = (productId, removeAll = false) => {
        setCart((prvsCart) => {
            const existingItem = prvsCart.find(item => item.id === productId)
            if (!existingItem) return prvsCart
            if (removeAll || existingItem.quantity == 1) {
                return prvsCart.filter(item => item.id != productId)
            }
            else {
                return prvsCart.map(item => item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
            }
        }
        )
    }
    //clear whole cart at once
    const clearCart = () => setCart([]);
    //item count of cart
    const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
    //total price count of cart
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.quantity * item.price, 0), [cart])

    return (
        <CartContext value={{ products, cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
            {children}
        </CartContext>
    )
}

export const useCart = () => useContext(CartContext)


