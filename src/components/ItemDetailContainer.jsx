import React, {useState, useEffect} from "react";
import {productos} from "../mock/productos";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

export default function ItemDetailContainer(props) {
    
    const [Unicoprod, setUnicoprod] = useState({});
    const {id} = useParams();
    
    console.log("parametros", id)

    useEffect(()=>{
        const promesaUnicoProducto = new Promise ((resolver, rechazar)=>{
            setTimeout(() => {
                let idNum = parseInt(id);
                const itemFound = productos.find (producto =>{
                    return producto.id === idNum
                })
                resolver(itemFound);
            }, 500);
        });
        promesaUnicoProducto
        .then((respuesta)=>{
            setUnicoprod(respuesta);
        })
        .catch((errorCatch)=>{
            console.log(errorCatch)
        })
    },[id]
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