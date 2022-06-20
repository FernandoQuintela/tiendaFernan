import { useState } from 'react';

function ItemCount({ stock, initial }) {

    const [cant, setCount] = useState(initial);

    function suma() {
        if (cant >= stock) {alert("Se alcanzó el máximo permitido para este producto")}
        else 
        setCount(cant+1);
    }

    function resta() {
        if (cant <= 1) {alert("Se alcanzó el mínimo permitido para este producto")}
        else 
        setCount(cant-1);
    }

    return(
        <div className='agregarCarrito'>
            <button onClick={resta}> - </button>
            <span> {cant} </span>
            <button onClick={suma}> + </button>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount

