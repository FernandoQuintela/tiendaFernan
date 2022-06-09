import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div>
        <nav>
            <ul>
                <li>Stock</li>
                <li>Contacto</li>
                <CartWidget></CartWidget>    
            </ul>
        </nav>
        </div>
    )
}

export default NavBar;