import { LOGO_URL } from "../utils/constants";
import React from "react";
import { useState } from "react";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="http://localhost:1234/">Home</a></li>
                    <li><a href="http://localhost:1234/about">About Us</a></li>
                    <li><a href="http://localhost:1234/contact">Contact Us</a></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;