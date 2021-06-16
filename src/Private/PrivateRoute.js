import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom';
import ConfigRoute from '../config/route';
function PrivateRoute({role , setRole }) {
    let Role = role || "guest";
    let allowedRoutes = ConfigRoute[Role].allowedRoutes;
    let redirectRoutes = ConfigRoute[Role].redirectRoutes;
    return (
       <Switch>
           {allowedRoutes.map(route=>{
               return (
                   <Route path ={route.url} key={route.url} exact>
                       <route.component role={Role} setRole={setRole} />
                   </Route>
               )
           })}
           <Redirect to={redirectRoutes} />
       </Switch>
    )
}

export default PrivateRoute
