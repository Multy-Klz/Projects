import './Header.css'
import React from 'react'


//Define the Header component to render dinamicly
export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            {/* Props passed dinamicly by the father  component */}
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className='lead text-muted'>{props.subtitle}</p>
</header>
    