import React, { useState } from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import { CartContext } from '../Context/CartContext';
import { useContext } from "react";
//import { createContext } from "react";

const ItemDetail = ({ item }) => {
    
    const {addToCart} = useContext (CartContext);
    
    const [ cant, setCant ] = useState(0);

    const handleOnAdd = (count) => {
        setCant(count);
        addToCart(item, count);
    }

    return (
        <div>
            <h1 className="tituloDetalleProducto">{item.nombre}</h1>
            <p className="tituloDetalleProducto">Precio $ {item.precio}</p>
            <img src={item.img} alt="imagen portada" className="imagenItems"/>
            <p>{item.descripcion}</p>
            
            {
            (!cant && <ItemCount></ItemCount>)
                ? <ItemCount onAdd={handleOnAdd} stock={2} initial={1}></ItemCount>
                : <Link to={`/Cart`}><button>Finalizar Compra</button></Link>
            }
          
        </div>
    )
}

export default ItemDetail