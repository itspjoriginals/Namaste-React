import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const restaurant = useRestaurantMenu(resId);

  // Extract recommended items (you can customize this logic)
  useEffect(() => {
    if (restaurant?.menu?.items) {
      setMenuItems(Object.values(restaurant.menu.items));
    }
  }, [restaurant]);

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50 py-8 lg:py-12">
      {/* Restaurant Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-100 overflow-hidden mb-8">
          <div className="relative">
            <img
              src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`}
              alt={restaurant?.name}
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
                {restaurant?.name}
              </h1>
              <p className="text-lg opacity-90 mb-6 max-w-2xl">
                {restaurant?.cuisines?.join(' • ')}
              </p>
            </div>
          </div>
          
          {/* Restaurant Stats */}
          <div className="p-8 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-r from-orange-50/50 to-red-50/50">
            <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
              <div className={`p-2 rounded-xl ${
                restaurant?.avgRating >= 4 
                  ? 'bg-green-500' 
                  : restaurant?.avgRating >= 3 
                  ? 'bg-orange-500' 
                  : 'bg-gray-500'
              }`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{restaurant?.avgRating || '--'}</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
              <div className="p-2 bg-orange-500 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{restaurant?.sla?.slaString}</p>
                <p className="text-sm text-gray-600">Delivery</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
              <div className="p-2 bg-green-500 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">{restaurant?.costForTwoMessage}</p>
                <p className="text-sm text-gray-600">Cost for two</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Recommended</h2>
                  <p className="text-orange-100 font-medium">{menuItems.length} ITEMS</p>
                </div>
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {menuItems.map((item) => (
                <div 
                  key={item?.card?.info?.id || item?.id} 
                  className="group p-6 hover:bg-orange-50 transition-all duration-200 border-b border-orange-50 last:border-b-0"
                >
                  <div className="flex items-start justify-between gap-6 lg:gap-8">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {item?.card?.info?.name || item?.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                        {item?.card?.info?.description || item?.description}
                      </p>
                      <p className="text-2xl font-bold text-orange-600 mb-1">
                        {item?.card?.info?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format((item?.card?.info?.price || item?.price) / 100)
                          : '₹ --'
                        }
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      {item?.card?.info?.imageId && (
                        <img
                          src={`${ITEM_IMG_CDN_URL}${item?.card?.info?.imageId}`}
                          alt={item?.card?.info?.name || item?.name}
                          className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-200"
                        />
                      )}
                      <button className="group/add px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm rounded-2xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-200 transform hover:-translate-y-1 active:scale-95 w-full">
                        <span className="flex items-center justify-center gap-2">
                          ADD 
                          <svg className="w-4 h-4 group-hover/add:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {menuItems.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No menu items available</h3>
              <p className="text-gray-600">Check back later for delicious recommendations</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
