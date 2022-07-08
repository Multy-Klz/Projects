import React, { Component, useContext } from "react";
import axios from 'axios'
import Main from '../templates/main'
import Product from "../templates/product";
import './home.css'

const headerProps = {
    icon: 'cart',
    title: 'Checkout',
    Subtitle: 'Listar produtos, excluir e adicionar quantidade'
}
const baseUrl = 'http://localhost:3001/products'


const initialState = {
    products: { id: '', name: '', price: '', image: '' }, list: []
}


export default class CheckoutCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data () })
        })
    }

    renderTable() {
        return (
            <p>{this.renderData()}</p>
        )
    }

    renderData() {
        return this.state.list.map(user => {
            return (
                <div className="home">
                    <div className="productContainer">
                        <Product user={user} key={user.id} />
                    </div>
                </div>
            )
        })

    }

    render() {
        console.log(this.state.list)
        return (
            <Main {...headerProps}>
                {this.renderTable()}
            </Main>
        )
    }
}
// export default props =>
//     <><Header /><Main>
//         <div>Bem Vindo!</div>
//         <hr />
//         <p className="mb-0">Sistema teste</p>
//     </Main></>
