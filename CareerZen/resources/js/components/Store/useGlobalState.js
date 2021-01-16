import { useState, useEffect } from "react";

const useGlobalState = () => {
    const [state, setstate] = useState({
        id: null
    });

    const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     // const data = localStorage.getItem("token");
    //     // console.log("use effect token", data);
    //     if (window) {
    //         setstate({
    //             isLoggedIn: localstorage.getItem("isLoggedIn"),
    //             token: localstorage.getItem("token")
    //         });
    //     } else {
    //         setstate({
    //             isLoggedIn: false,
    //             token: ""
    //         });
    //     }
    // }, []);

    useEffect(() => {
        // setLoading(true);
        async function fetchData() {
            const token = localStorage.getItem("token");
            if (typeof window !== undefined) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/user",
                    config
                );
                setstate({
                    id: response.data.id
                });
                console.log(state.id);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     setstate({
    //         isLoggedIn: false,
    //         token: ""
    //     });
    // }, []);

    const actions = action => {
        const { type, payload } = action;
        switch (type) {
            case "login":
                return setstate(payload);
            case "logout":
                return setstate(payload);
            default:
                return state;
        }
    };

    return { state, actions, isLoading };
};

export default useGlobalState;
