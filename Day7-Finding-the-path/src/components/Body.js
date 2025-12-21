import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSeachText] = useState("");
    const [filteredRestaurant, setFilteredResturant] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.766586034316582&lng=75.84711089730263&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null');

        const json = await data.json();

         const restaurants = json.data.cards
      .filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((c) => c.card.card.info);

    setListOfRestaurants(restaurants);
    setFilteredResturant(restaurants);
    }

    if(listOfRestaurants.length === 0){
        return (
            <Shimmer />
        )
    }

    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search-input" value={searchText} onChange={(e) =>{
                    setSeachText(e.target.value);
                }}/>
                <button onClick={() =>{
                    const filteredRestaurant  = listOfRestaurants.filter((res) =>
                        res.name.toLowerCase().includes(searchText.toLowerCase())
                );
                    setFilteredResturant(filteredRestaurant);
                }}
                >Search</button>
            </div>
            <div className="filter-btn" onClick={() =>{
                console.log("Button Clicked");
                const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4 );

                setFilteredResturant(filteredList);
            }}>
                Top Rated Restaurants
            </div>
            <div className="res-container">
                
                {filteredRestaurant.map(restaurant => <Link key={restaurant.id}  to={"/restaurants/" + restaurant.id }><RestaurantCard resData={restaurant}/></Link>)}
            </div>
        </div>
    )
}

export default Body;