import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'



import "./NavBar.css"
const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <img
                        alt=""
                        src="/public/Logo LG.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Link>

                <Nav className="me-auto">
                    <NavLink className='btn btn-primary' to='/category/camiseta'>Camisetas</NavLink>
                    <NavLink className='btn btn-primary' to='/category/pantalon'>Pantalones</NavLink>
                </Nav>


                <Link to='/cart'>
                    <img
                        src="/public/Carrito.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    /></Link>
            </Container >
        </Navbar >
    )
}
export default NavBar



