import { Card } from "react-bootstrap";
import logo from '../../assets/super-mario-odyssey.png'
import React from 'react'
import './product.css'

const imgURL = '../../assets/super-mario-odyssey.png'

console.log(typeof (logo), logo)
console.log(typeof (imgURL), imgURL)


const Product = ({ user }) => {
    const imggg = require(`../../assets/${user.image}`).default
    console.log(imggg, `../../assets/${user.image}`)
    return (
        <div className='products' xs='auto'>


            <Card border='info' style={{ width: '250px', height: '400px' }}>
                <Card.Img variant="top" src={imggg} alt={user.name} style={{ marginTop: '15px' }} />
                <Card.Body style={{ display: 'flex', flexDirection: "column", height: '140px', justifyContent: 'space-between' }}>
                    <Card.Title style={{ textAlign: 'center' }}>{user.name}</Card.Title>
                    <Card.Text >
                        <div className='productData' style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                            <p style={{ fontSize: '15px', textAlign: 'center' }} >Rating {user.score}</p>
                            <p style={{ textAlign: 'right' }}>R$ {user.price}</p>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Product


