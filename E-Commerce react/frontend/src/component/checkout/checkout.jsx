import React, { Component, useContext } from "react";
import axios from 'axios'
import Main from '../templates/main'

const headerProps = {
    icon: 'cart',
    title: 'Checkout',
    Subtitle: 'Listar produtos, excluir e adicionar quantidade'
}
const baseUrl = 'http://localhost:3001/products'

const initialState = {
    products: {id: '', name: '', price:'', image: ''}, list: []
}



export default class CheckoutCrud extends Component {

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }



    render() {
        console.log(this.state.list)
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}
