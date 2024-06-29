import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav id="menu" className="nav justify-content-center">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="products">Products</NavLink>
        </nav>
    )
}

export default Navbar;