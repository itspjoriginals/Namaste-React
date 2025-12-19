import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
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
    }

    if(listOfRestaurants.length === 0){
        return (
            <Shimmer />
        )
    }

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