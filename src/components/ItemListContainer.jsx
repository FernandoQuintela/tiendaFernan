import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer(props) {
    console.log(props);
    return (
        <div className="contenedor-items">
            <p>{props.greeting}</p>
            <ItemCount stock={2} initial={1}></ItemCount>    
        </div>
    )
}