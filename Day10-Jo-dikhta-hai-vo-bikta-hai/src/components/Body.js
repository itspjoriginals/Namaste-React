import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { FOODFIRE_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(FOODFIRE_API_URL);
      const json = await data.json();

      const restaurantCard = json?.data?.cards?.find(card => 
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      let restaurants = [];
      
      if (restaurantCard) {
        restaurants = restaurantCard.card.card.gridElements.infoWithStyle.restaurants || [];
      } else {
        const topBrandsCard = json?.data?.cards?.find(card => 
          card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        if (topBrandsCard) {
          restaurants = topBrandsCard.card.gridElements.infoWithStyle.restaurants || [];
        }
      }

      const restaurantList = restaurants.map((res) => res.info);
      setListOfRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  // Live search filtering
  useEffect(() => {
    const filtered = listOfRestaurants.filter((res) =>
      res.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchText, listOfRestaurants]);

  const handleTopRatedFilter = () => {
    setIsTopRated(!isTopRated);
    const filtered = listOfRestaurants.filter(
      (res) => res.avgRating > 4
    );
    setFilteredRestaurants(filtered);
  };

  if (!onlineStatus) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-8 bg-red-100 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">You're Offline!</h1>
          <p className="text-gray-600 mb-6">Check your internet connection and refresh the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      {/* 🔍 Search Bar */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                className="w-full pl-12 pr-4 py-4 bg-orange-50 border-2 border-orange-200 rounded-2xl text-lg font-medium placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-200" 
                placeholder="Search for restaurants, cuisines, or dishes..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <button 
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ Top Rated Filter */}
      <div className="max-w-4xl mx-auto mb-10">
        <button
          onClick={handleTopRatedFilter}
          className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform mx-auto block ${
            isTopRated
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 ring-4 ring-orange-200'
              : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50 shadow-lg hover:shadow-xl hover:-translate-y-1'
          }`}
        >
          <span className="flex items-center gap-2">
            <svg className={`w-6 h-6 transition-transform ${isTopRated ? 'rotate-12 scale-110' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Top Rated Restaurants ({listOfRestaurants.filter(res => res.avgRating > 4).length})
          </span>
        </button>
      </div>

      {/* 🍽 Restaurant Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link 
            key={restaurant.id}
            to={`/restaurants/${restaurant.id}`}
            className="block"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {filteredRestaurants.length === 0 && (
          <div className="col-span-full text-center py-20">
            <svg className="w-24 h-24 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
