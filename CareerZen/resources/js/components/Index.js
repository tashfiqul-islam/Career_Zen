import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactRouter from "./LandingPage/ReactRouterSetup";
// import useGlobalState from "./Store/useGlobalState";
// import Context from "./Store/Context";

function Index() {
    // const store = useGlobalState();
    return (
        <div>
            {/* <Context.Provider value={store}> */}
                <ReactRouter />
            {/* </Context.Provider> */}
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
