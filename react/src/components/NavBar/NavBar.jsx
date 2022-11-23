import "./NavBar.css"
export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Tienda Lautaro
                    <img src="" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Producto 1 </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Producto 2 </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Producto 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
