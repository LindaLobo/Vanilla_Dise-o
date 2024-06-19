import React from 'react'

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg" id='nav'>
            <div className="container-fluid">
                <a className="navbar-brand" id='logo' href="/">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav flex-row flex-wrap ms-md-auto" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/seccion2">Sección 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/seccion3">Sección 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu
