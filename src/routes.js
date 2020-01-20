import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Pages from './pages';
const { 
    Landing,
    Session,
    NotFound,
} = Pages;

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Landing />} />
            <Route exact path="/session" component={() => <Session />} />
            <Route component={() => <NotFound />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;