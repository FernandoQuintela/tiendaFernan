import React from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";

function ItemDetail({item}) {
    const [ isAddedToCart, SetAddedToCart] = React.useState(false);

    function handleOnAdd(cant){
        console.log("cantidad de items=", cant);
        SetAddedToCart(true);
    }

    return (
        <div>
            <h1 className="tituloDetalleProducto">{item.nombre}</h1>
            <p className="tituloDetalleProducto">Precio $ {item.precio}</p>
            <img src={item.img} alt="imagen portada" className="imagenItems"/>
            <p>{item.descripcion}</p>
            
            {
            (!isAddedToCart && <ItemCount></ItemCount>)
                ? <ItemCount onAdd={handleOnAdd} stock={2} initial={1}></ItemCount>
                : <Link to={`/Cart`}><button>Finalizar Compra</button></Link>
            }
        </div>
    )
}

export default ItemDetail