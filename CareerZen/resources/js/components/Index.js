import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactRouter from "./LandingPage/ReactRouterSetup";

function Index() {
    return (
        <div>
            <ReactRouter />
        </div>
    );
}

export default Index;

if (document.getElementById("LandingBody")) {
    ReactDOM.render(
        <React.Fragment>
            <Index />
        </React.Fragment>,
        document.getElementById("LandingBody")
    );
}
