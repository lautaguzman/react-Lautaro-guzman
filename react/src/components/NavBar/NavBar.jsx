import { Container, Nav, Navbar, NavLink } from 'react-bootstrap'

import "./NavBar.css"
const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <img
                    alt=""
                    src="/public/Logo LG.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                <Nav className="me-auto">
                    <NavLink to="/category/camisetas">Camisetas</NavLink>
                    <NavLink to="/category/pantalones" >Pantalones</NavLink>
                    <Nav.Link href="producto 3">Producto 3</Nav.Link>
                </Nav>

                <img
                    src="/public/Carrito.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                />
            </Container>
        </Navbar>
    )
}
export default NavBar



