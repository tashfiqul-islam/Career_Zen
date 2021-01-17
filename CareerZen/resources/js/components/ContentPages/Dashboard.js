import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
// import axios from "axios";
// Auth imports
// import Context from "../Store/Context";
import UseAuth from "../Store/UseAuth";

const Dashboard = () => {
    const { state, actions } = UseAuth();

    // Check if login/Register token is there

    // const user = localStorage.getItem("user");
    const [currentUser, setCurrentUser] = useState({
        id: "",
        name: "",
        email: ""
    });

    // const [isNavigate, setNavigate] = useState(false);

    const onLogoutHandler = () => {
        console.log("auth state");
        console.log(state);
        actions({
            type: "logout",
            payload: {
                isLoggedIn: false,
                token: null
            }
        });

        localStorage.clear();
        // setNavigate(true);
    };
    // if no token back to landing page
    // if (!token) {
    //     return <Redirect to="/#login" />;
    // } else {};

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        setCurrentUser({
            id: user.id,
            name: user.name,
            email: user.email
        });

        // const config = {
        //     headers: {
        //         Authorization: "Bearer " + token
        //     }
        // };
        // axios
        //     .get("http://127.0.0.1:8000/api/user", config)
        //     .then(response => {
        //         console.log(response);
        //         setCurrentUser({
        //             id: response.data.id,
        //             name: response.data.name,
        //             email: response.data.email
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        // actions({
        //     type: "login",
        //     payload: {
        //         id: currentUser.id
        //     }
        // });
    }, []);

    // if (isNavigate) {
    //     return <Redirect to="/#login" push={true} />;
    // }
    return (
        <div>
            <h1 style={{ padding: 5 }}>Dashboard</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                dolorem, omnis quas adipisci expedita voluptatum quod
                dignissimos ullam repudiandae voluptates soluta veritatis magnam
                nostrum quibusdam maiores, harum asperiores molestias. Soluta.
            </p>
            <h1> user id is : {currentUser.id}</h1>

            <Button
                className="btn btn-primary text-right"
                onClick={onLogoutHandler}
            >
                Logout
            </Button>
        </div>
    );
};
export default Dashboard;
