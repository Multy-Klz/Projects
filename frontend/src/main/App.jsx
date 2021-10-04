import './App.css'
import React from 'react'

import Cart from '../component/templates/cart'
import Nav from '../component/templates/nav'
import Home from '../component/home/home'
import Footer from '../component/templates/footer'


export default props =>
<div className="app">
    <Cart />
    <Nav />
    <Home />
    <Footer />
</div>
