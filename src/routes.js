import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Util from "./util";

import Pages from './pages';
const { 
    Landing,
    Session,
    NotFound,
    Cart,
} = Pages;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => 
            Util.isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/session", state: { from: props.location } }} />
            )
        } 
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Landing />} />
            <Route exact path="/session" component={() => <Session />} />
            <PrivateRoute exact path="/cart" component={() => <Cart />} />
            <Route component={() => <NotFound />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;