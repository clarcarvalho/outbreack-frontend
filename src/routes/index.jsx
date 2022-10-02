import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";

import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { Feed } from "../pages/Feed";
import Home from "../pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Cadastro} />
        <Route path="/feed" component={Feed} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
