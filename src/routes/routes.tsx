import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//custom imports
import Home from "../Pages/home";


const customHistory = createBrowserHistory();

// Routes For Navigation
const AppRoutes = () => {

  
  return (
    <Router history={customHistory}>
      
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
    
    </Router>
  );
};

export default AppRoutes;
