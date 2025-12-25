import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  
  const { 
    cloudinaryImageId, 
    name, 
    cuisines, 
    locality, 
    avgRating, 
    sla 
  } = resData;
  
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
      {/* Restaurant Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
          alt="Restaurant" 
          src={`${CDN_URL}${cloudinaryImageId}`} 
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Restaurant Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight line-clamp-1">
          {name}
        </h3>
        
        {/* Cuisines */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {cuisines.join(', ')}
        </p>
        
        {/* Location */}
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {locality}
        </div>

        {/* Rating & Delivery Time */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <div className="flex text-sm text-orange-500 mr-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 font-medium">{avgRating}</span>
            </div>
            <span className="text-xs text-gray-400">({Math.round(Math.random() * 1000)} ratings)</span>
          </div>
          
          <div className="flex items-center px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {sla.deliveryTime} min
          </div>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          🔥 Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
