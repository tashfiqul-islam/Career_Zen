import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import FeatureDesc from "./FeatureDesc";

function LandingPg() {
    return (
        <div>
            <Navbar />
            <About />
            <LoginForm />
            <FeatureDesc />
        </div>
    );
}

export default LandingPg;
