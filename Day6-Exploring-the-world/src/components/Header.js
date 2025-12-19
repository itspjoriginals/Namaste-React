import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
const Header =() =>{

    const [login, setLogin] = useState("Log in");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Menu</li>
                    <li>Offers</li>
                    <li>Foods</li>
                    <li>Services</li>
                    <li>Restaurants</li>
                    <button className="login-btn" onClick={() =>{
                       login==="Log in"? setLogin("Logout"): setLogin("Log in");
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;