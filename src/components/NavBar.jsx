import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div>
        <nav>
            <ul className="centradoNavBar">
                <NavLink to='/' className="itemMenu">Stock</NavLink>
                <NavLink to='/categoria/oferta' className="itemMenu">Oferta</NavLink>
                <NavLink to='/contacto' className="itemMenu">Contacto</NavLink>
            </ul>
        </nav>
        <div><CartWidget></CartWidget></div>
        </div>
    )
}

export default NavBar;