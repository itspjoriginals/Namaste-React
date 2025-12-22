import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";  // ✅ Fixed import

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");  // ✅ Fixed typo
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);  // ✅ Fixed naming

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
      
      const json = await data.json();

      // ✅ CORRECT PATH from current API (same as About component)
      const restaurantCard = json?.data?.cards?.find(card => 
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      let restaurants = [];
      
      if (restaurantCard) {
        restaurants = restaurantCard.card.card.gridElements.infoWithStyle.restaurants || [];
      } else {
        // ✅ Fallback: Top brands or other restaurant cards
        const topBrandsCard = json?.data?.cards?.find(card => 
          card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        if (topBrandsCard) {
          restaurants = topBrandsCard.card.gridElements.infoWithStyle.restaurants || [];
        }
      }

      // ✅ Extract `info` from each restaurant
      const restaurantList = restaurants.map((res) => res.info);

      setListOfRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);  // ✅ Fixed naming
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ✅ Loading state
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* 🔍 Search Bar */}
      <div className="search">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);  // ✅ Fixed typo
          }}
        />
        <button 
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res.name?.toLowerCase().includes(searchText.toLowerCase())  // ✅ Safe navigation
            );
            setFilteredRestaurants(filtered);  // ✅ Fixed naming
          }}
        >
          Search
        </button>
      </div>

      {/* ⭐ Top Rated Filter */}
      <div 
        className="filter-btn" 
        onClick={() => {
          console.log("Button Clicked");
          const filteredList = listOfRestaurants.filter(
            (res) => res.avgRating > 4  // ✅ Safe number comparison
          );
          setFilteredRestaurants(filteredList);  // ✅ Fixed naming
        }}
      >
        Top Rated Restaurants
      </div>

      {/* 🍽 Restaurant Cards */}
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (  // ✅ Fixed naming
          <Link 
            key={restaurant.id}
            to={`/restaurants/${restaurant.id}`}  // ✅ Template literal
            style={{ textDecoration: "none" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
