import './cart.css'
import React from 'react'
import cart from '../../assets/cart-icon.svg'


export default props =>
    <aside className="cart">
        <a className="cart">
            <img src={cart} alt= "cart" />
        </a>
    </aside>