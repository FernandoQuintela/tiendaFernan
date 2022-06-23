import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import {productos} from "../mock/productos";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";


export default function ItemListContainer(props) {
    
    const [prod, setProd] = useState([]);
    const {categoriaId} = useParams();

    useEffect(()=>{
        const promesaProductos = new Promise ((resolver, rechazar)=>{
            setTimeout(() => {
                if(categoriaId === undefined)
                    resolver(productos);
                else{
                    const itemsFound = productos.filter (producto => {
                        return producto.categoria === categoriaId;
                    })
                    resolver(itemsFound);
                }
            }, 500);
        });
        
        promesaProductos
        .then((respuesta)=>{
            setProd(respuesta);
        })
        .catch((errorCatch)=>{
            console.log(errorCatch)
        })
    },[categoriaId]
    );

    console.log(prod);

    console.log(props);
    return (
        <div className="contenedor-items">
            <p className="tituloStock">{props.greeting}</p>
            <ItemCount stock={2} initial={1}></ItemCount>
            <ItemList items={prod}/> 
        </div>
    );
};