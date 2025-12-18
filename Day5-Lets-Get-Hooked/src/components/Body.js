import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="filter-btn" onClick={() =>{
                console.log("Button Clicked");
                const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4 );

                setListOfRestaurants(filteredList);
            }}>
                Top Rated Restaurants
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;