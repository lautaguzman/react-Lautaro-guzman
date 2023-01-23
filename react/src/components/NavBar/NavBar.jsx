import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

import "./NavBar.css";
const NavBar = () => {
  const { cantidadTotal } = useCartContext();
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">
          <Link to="/">
            <img
              alt=""
              src="/dist/Logo LG.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>
        </h1>
        <NavLink className="btn btn-primary" to="/category/camiseta">
          Camisetas
        </NavLink>
        <NavLink className="btn btn-primary" to="/category/pantalon">
          Pantalones
        </NavLink>
        <h2 className="navbar-carrito">
          {" "}
          <Link to="/cart">
            <img
              src="/public/Carrito.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            {cantidadTotal() !== 0 && cantidadTotal()}
          </Link>
        </h2>
      </nav>
    </div>
  );
};
export default NavBar;
{
  /* <Navbar bg="dark" variant="dark">
<Container>
  <Link to="/">
    <img
      alt=""
      src="/dist/Logo LG.jpg"
      width="30"
      height="30"
      className="d-inline-block align-top"
    />
  </Link>

  <Nav className="me-auto">
    <NavLink className="btn btn-primary" to="/category/camiseta">
      Camisetas
    </NavLink>
    <NavLink className="btn btn-primary" to="/category/pantalon">
      Pantalones
    </NavLink>
  </Nav>

  <Link to="/cart">
    <img
      src="/public/Carrito.jpg"
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt=""
    />
    {cantidadTotal() !== 0 && cantidadTotal()}
  </Link>
</Container>
</Navbar> */
}
