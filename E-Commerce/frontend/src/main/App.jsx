import './App.css'
import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import Routes from './routes'
import Cart from '../component/templates/cart'
import Nav from '../component/templates/nav'
import Header from '../component/templates/header'
import Footer from '../component/templates/footer'


export default props =>
    <BrowserRouter>
        <div className="app">
           <Header />
            <Cart />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>

// export default props =>
//     <BrowserRouter>
//         <Header />
//         <div className="app">
//             <Cart />
//             <Header />
//             <Routes />
//             <Footer />
//         </div>
//     </BrowserRouter>
