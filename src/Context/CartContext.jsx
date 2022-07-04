import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
        },
        [cart]
        );

    const addToCart = (item, count) => {
        if (isInCart(item.id)) {
            console.log('ya esta en el carrito. Quedaria que sume la cantidad')
        } else {
            setCart([...cart, {...item, count}]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const clearCart = () => {
        setCart([]);
    };

    return(
        
        <CartContext.Provider value={{cart, addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}