import carrito from './imgComponentes/CARRITO.png';
function CartWidget() {
    return (
        <nav>
            <img alt= "carrito" src={carrito} className="Logo-carrito"/>
        </nav>
    )
}

export default CartWidget;