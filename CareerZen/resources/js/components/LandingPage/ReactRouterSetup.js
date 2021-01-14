import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// These are all components.
// Router -> Routes to different page
// Route -> Every single routes
// Switch -> The first route that matchs

// pages
import LandingPage from "./LandingPg";
// navbar
import Navbar from "./Navbar";
import Signup from "./Signup";
import Error from "./Error";

const ReactRouterSetup = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>

                <Route exact path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
};

export default ReactRouterSetup;
