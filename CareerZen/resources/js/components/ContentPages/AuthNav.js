import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "../../../css/AuthNav.css";
import { IconContext } from "react-icons";

function AuthNav() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="auth-navbar">
                    <Link to="#" className="auth-menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav
                    className={
                        sidebar ? "auth-nav-menu active" : "auth-nav-menu"
                    }
                >
                    <ul className="auth-nav-menu-items" onClick={showSidebar}>
                        <li className="auth-navbar-toggle">
                            <Link to="#" className="auth-menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default AuthNav;
