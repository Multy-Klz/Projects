import './nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <h1 className="search"><i className="fa fa-search"></i> Filtros de Busca </h1>
        <nav className="menu">
            {/* refatorar como header */}
            <div >
                <i className="fa fa-search"></i> Filtros
            </div>
            <div >
                <i className="fa fa-user"></i> Usuarios
            </div> 
        </nav>
    </aside>