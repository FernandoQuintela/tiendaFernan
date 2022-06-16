import React from "react";

const Item = ({item})=> {
    console.log(item);
    return (
    <div className="bordeItem">
        <div>
            <h2>{item.nombre}</h2>
        </div>
        <div>
            <img src={item.img} alt="imagen portada" className="imagenItems"/>
        </div>
        <div>
            <h3>Precio ${item.precio}</h3>
        </div>
        <button className="botonDetalleProducto">Ver detalle del producto</button>
    </div>
    );
};

export default Item;