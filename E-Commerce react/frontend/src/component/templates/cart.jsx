import './cart.css'
import React from 'react'
import cart from '../../assets/cart-icon.svg'
import { Badge, Container, Nav, Dropdown } from 'react-bootstrap'

export default props =>

    <aside className="cart">
        <Dropdown>
            <Dropdown.Toggle variant="success">
                <a className="cart">
                    <img src={cart} alt="cart" />
                </a>
                <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 30 }}> Cart is Empty!</span>
            </Dropdown.Menu>
        </Dropdown>
    </aside>