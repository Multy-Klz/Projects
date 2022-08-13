import React, { ReactComponentElement, ReactElement } from "react";
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from 'react-router-dom'

import Register from '../pages/Register'
import List from '../pages/List'
import User from "../hooks/User";



function AppRouter() {

    const { getToken, setToken, getTitle, setTitle } = User();
    const baseUrl = 'https://dogbreed-api.q9.com.br' ;
    
    function PrivateRoute() {
        let resp = getToken();
        let auth = false;

        if (resp === ' ') {
            auth = true;
        }

        return (
            auth ? <Navigate to='/' /> : <List
                token={getToken()}
                baseUrl={baseUrl}
                
            />

        )
    }

    return (
        <div>

        <Router>
                <Routes>
                    <Route path="*" element={<Register
                        getToken={getToken}
                        changeToken={setToken}
                        baseUrl={baseUrl}
                    />} /> 
                    
                    <Route path="/" element={<Register
                    getToken={getToken}
                        changeToken={setToken}
                        baseUrl={baseUrl}
                    />} /> 
                    {/* <Route path="/list" element={<List token={getToken()} />} />  */}
                
                     <Route
                        path='/list'
                        element= {<PrivateRoute/>} /> 
                 </Routes>

        </Router>
        
        </div>
    )
}

export default AppRouter;
