import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div>
        <nav>
            <ul className="centradoNavBar">
                <li className="itemMenu">Stock</li>
                <li className="itemMenu">Ofertas</li>
                <li className="itemMenu">Contacto</li>
            </ul>
        </nav>
        <div><CartWidget></CartWidget></div>
        </div>
    )
}

export default NavBar;