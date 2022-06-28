import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);

    function suma() {
        if (count >= stock) {alert("Se alcanzó el máximo permitido para este producto")}
        else 
        setCount(count+1);
    }

    function resta() {
        if (count <= 1) {alert("Se alcanzó el mínimo permitido para este producto")}
        else 
        setCount(count-1);
    }

    return(
        <div className='agregarCarrito'>
            <button onClick={resta}> - </button>
            <span> {count} </span>
            <button onClick={suma}> + </button>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount

