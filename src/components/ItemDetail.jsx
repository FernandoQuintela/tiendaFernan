import React from "react";

function ItemDetail({item}) {
    return (
        <div>
            <h1 className="tituloOferta">Oferta del Mes</h1>
            <h1 className="tituloOferta">{item.nombre}</h1>
            <p className="tituloOferta">Precio $ {item.precio}</p>
            <img src={item.img} alt="imagen portada" className="imagenItems"/>
            <p>{item.descripcion}</p>
            <div><button className="botonDetalleProducto">Ver detalle del producto</button></div>
        </div>
    )
}

export default ItemDetail