import "./NavBar.css"
export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCz_vtzVOG81mOslljAYhGc3j9LME7wnVGg&usqp=CAU" alt="" width="70" height="40" />
                </a>
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
                <img src="data:image/png;base64,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" alt="" width="30" height="24" />
            </div>
        </nav>
    )
}
