import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSeachText] = useState("");
  const [filteredRestaurant, setFilteredResturant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    // fetchData();
    getData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.766586034316582&lng=75.84711089730263&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

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
  };

  const getData = async () => {

    const data = await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING;');

    const json = await data.json();

    const updatedRestaurants = json.data.cards
      .filter(
        (c) =>
          c.card?.card?.gridElements?.infoWithStyle["@type"] ===
          "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo"
      )
      .flatMap((c) => 
      c.card.card.gridElements.infoWithStyle.restaurants?.map(r => r.info) || []
    );

    // console.log(updatedRestaurants[0]);
    setListOfRestaurants(updatedRestaurants);
    setFilteredResturant(updatedRestaurants);

  }


  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      {/* Search bar */}
      <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm shadow-sm outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-200"
            placeholder="Search for restaurants or cuisines..."
            value={searchText}
            onChange={(e) => {
              setSeachText(e.target.value);
            }}
          />
        </div>

        <button
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResturant(filteredRestaurant);
          }}
          className="px-6 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-medium shadow-md hover:bg-orange-600 active:bg-orange-700 transition-colors"
        >
          Search
        </button>
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          className="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 shadow-sm hover:border-orange-400 hover:text-orange-500 transition-colors"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setFilteredResturant(filteredList);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>

        {/* Add more filter chips here if needed */}
      </div>

      {/* Restaurants grid */}
      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            className="block"
          >
            {restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
