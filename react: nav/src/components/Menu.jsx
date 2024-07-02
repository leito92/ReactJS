import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="products">Products</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu;
