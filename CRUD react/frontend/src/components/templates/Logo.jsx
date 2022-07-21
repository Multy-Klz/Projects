import './Logo.css'
import logo from '../../assets/images/logo.png'
import React from 'react'
//component to navigation through other pages
import { Link } from 'react-router-dom'

export default props => 
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src={logo}  alt="logo" />
        </Link>
    </aside>