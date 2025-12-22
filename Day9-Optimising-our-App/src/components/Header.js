import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import "./Header.css";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header =() =>{

    const [login, setLogin] = useState("Log in");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/offers">Offers</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
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