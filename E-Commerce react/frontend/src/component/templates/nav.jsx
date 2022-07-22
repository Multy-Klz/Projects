import './nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <h1 className="search"><i className="fa fa-search"></i> Filtros de Busca </h1>
        <nav className="menu">
            {/* refatorar como header */}
            <div >
                <i className="fa fa-filter"></i> Filtro 1
            </div>
            <div >
                <i className="fa fa-filter"></i> Filtro 2
            </div> 
        </nav>
    </aside>