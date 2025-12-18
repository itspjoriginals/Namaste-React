import {LOGO_URL} from "../utils/constants";
const Header =() =>{
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
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;