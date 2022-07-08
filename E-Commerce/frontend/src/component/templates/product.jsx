import { Card } from "react-bootstrap";
import logo  from '../../assets/super-mario-odyssey.png'
import logo2 from '../../assets/call-of-duty-wwii.png'
import React from 'react'

const imgURL = require("../../assets/super-mario-odyssey.png")

console.log(typeof(logo), logo, logo2)
console.log(typeof(imgURL), imgURL)

const Product = ({ user }) => {
    return (
        <div className='products'>
            <Card>
                
                <Card.Img variant="top" src='/static/media/call-of-duty-wwii.png' alt={user.name} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle styled={{ paddindBottom: 10 }}>
                        <span>{user.price}</span>
                        {/* <Rating rating={user.score} /> */}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product


