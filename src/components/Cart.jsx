import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext"

const Cart = () => {
    const { prueba } = useContext(CartContext);
    return (
        <div>
            <br/>
            <p>PROXIMAMENTE AQUI TU COMPRA</p>
            <br/>
            <button onClick={prueba}>Click</button>   
        </div>
        );
        };

export default Cart;