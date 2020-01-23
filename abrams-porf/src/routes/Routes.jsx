import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Front from '../screens/Front'
import Blog from '../screens/Blog'


const Routes =()=>(
<Switch>
<Route exact path='/' component = {Front}></Route>
<Route exact path='/blog' component = {Blog}></Route>



</Switch>
);

export default Routes