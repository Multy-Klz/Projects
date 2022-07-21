import React from "react";
import { Routes, Route } from 'react-router-dom'

//Those components work as part page rendering
import Home from '../components/home/Home'
import UserCrud from '../components/user/userCRUD'

export default props => (
    //define which page will render as the routing schema on URL
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>
);