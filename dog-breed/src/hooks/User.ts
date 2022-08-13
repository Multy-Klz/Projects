import { useState } from "react"



export default function User() {
    
    const [userToken, setUserToken] = useState(' ')   
    const [ title, setTitle ] = useState('Register')

    // const title = !userToken ? 'Register' : 'List' ;

    //definir função para pegar email de input do usuário
    function getToken() {
        return userToken;
    }

    //definir função de requisitar token usando axios
    function setToken(token: string) {
        setUserToken(token)
        console.log(userToken)
        
    }

    function getTitle() {
        return title
    }

    //definir 

    return {
        getToken, setToken, getTitle, setTitle, 
    }
}