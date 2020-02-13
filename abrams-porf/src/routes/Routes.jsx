import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Front from '../screens/Front'
import Resume from '../screens/Resume'


const Routes =()=>(
<Switch>
<Route exact path='/' component = {Front}></Route>
<Route exact path='/resume' component = {Resume}></Route>



</Switch>
);

export default Routes