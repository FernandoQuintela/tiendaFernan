import React from "react";

function ItemDetail({item}) {
    return (
        <div>
            <h1 className="tituloDetalleProducto">{item.nombre}</h1>
            <p className="tituloDetalleProducto">Precio $ {item.precio}</p>
            <img src={item.img} alt="imagen portada" className="imagenItems"/>
            <p>{item.descripcion}</p>
        </div>
    )
}

export default ItemDetail