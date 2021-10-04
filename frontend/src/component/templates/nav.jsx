import './nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <h1 className="search"><i className="fa fa-search"></i> Selecione um filtro </h1>
        <nav className="menu">
            {/* refatorar como header */}
            <a href="#/">
                <i className="fa fa-search"></i> Filtros
            </a>
            <a href="#/users">
                <i className="fa fa-user"></i> Usuarios
            </a> 
        </nav>
    </aside>