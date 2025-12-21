import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router";
import "./Header.css";
const Header =() =>{

    const [login, setLogin] = useState("Log in");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/offers">Offers</Link>
                    </li>
                    <li>
                        <Link to="/foods">Foods</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <button className="login-btn" onClick={() =>{
                       login==="Log in"? setLogin("Logout"): setLogin("Log in");
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;