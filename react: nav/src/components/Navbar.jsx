import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav justify-content-center">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="products">Products</NavLink>
        </nav>
    )
}

export default Navbar;
