import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import {productos} from "../mock/productos";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {
    
    const [prod, setProd] = useState([])

    useEffect(()=>{
        const promesaProductos = new Promise ((resolver, rechazar)=>{
            setTimeout(() => {
                resolver(productos); 
            }, 2000);
        });
        promesaProductos
        .then((respuesta)=>{
            setProd(respuesta);
        })
        .catch((errorCatch)=>{
            console.log(errorCatch)
        })
    },[]
    );

    console.log(prod);

    console.log(props);
    return (
        <div className="contenedor-items">
            <p>{props.greeting}</p>
            <ItemCount stock={2} initial={1}></ItemCount>
            <ItemList items={prod}/>   
        </div>
    );
};