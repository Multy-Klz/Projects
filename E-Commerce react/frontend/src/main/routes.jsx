import React from "react";
import { Switch, Route, Redirect} from 'react-router'

import Home from '../component/home/home'
import Checkout from '../component/checkout/checkout'

export default props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/checkout' component={Checkout}/>
        <Redirect from ='*' to='/'/>

        {/* <div>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/checkout'>
                <Checkout />
            </Route>
        </div>
        <Redirect from='*' to='/' /> */}
    </Switch>