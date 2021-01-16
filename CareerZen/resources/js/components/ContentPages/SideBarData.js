import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IoBookcons from "react-icons/io5";

export const SideBarData = [
    {
        title: "DashBoard",
        path: "/dashboard",
        icon: <AiIcons.AiFillDashboard />,
        cName: "nav-text"
    },
    {
        title: "Tasks",
        path: "/tasks",
        icon: <FaIcons.FaTasks />,
        cName: "nav-text"
    },
    {
        title: "Wikipedia",
        path: "/wikipedia",
        icon: <FaIcons.FaWikipediaW />,
        cName: "nav-text"
    },
    {
        title: "Google Books",
        path: "/books",
        icon: <IoBookcons.IoBookSharp />,
        cName: "nav-text"
    },
    {
        title: "Youtube",
        path: "/youtube",
        icon: <FaIcons.FaYoutube />,
        cName: "nav-text"
    },
    {
        title: "Game",
        path: "/game",
        icon: <IoIcons.IoLogoGameControllerB />,
        cName: "nav-text"
    }
];
