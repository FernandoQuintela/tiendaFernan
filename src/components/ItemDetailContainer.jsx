import React, {useState, useEffect} from "react";
import {productos} from "../mock/productos";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props) {
    
    const [Unicoprod, setUnicoprod] = useState({})

    useEffect(()=>{
        const promesaUnicoProducto = new Promise ((resolver, rechazar)=>{
            setTimeout(() => {
                resolver(productos[0]); 
            }, 2000);
        });
        promesaUnicoProducto
        .then((respuesta)=>{
            setUnicoprod(respuesta);
        })
        .catch((errorCatch)=>{
            console.log(errorCatch)
        })
    },[]
    );

    console.log(Unicoprod);

    console.log(props);
    return (
        <div className="contenedor-items">
            <p>{props.greeting}</p>
            <ItemDetail item={Unicoprod}/>
        </div>
    );
};