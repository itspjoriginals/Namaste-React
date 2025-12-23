import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { 
    cloudinaryImageId, 
    name, 
    cuisines, 
    locality, 
    avgRating, 
    sla 
  } = resData;

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] max-w-sm mx-auto">
      {/* Restaurant Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
        <img 
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt={`${name} restaurant`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
            avgRating >= 4 
              ? 'bg-green-500' 
              : avgRating >= 3 
              ? 'bg-orange-500' 
              : 'bg-gray-500'
          }`}>
            ★ {avgRating}
          </span>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="p-6">
        {/* Name */}
        <h3 className="font-bold text-xl text-gray-900 leading-tight line-clamp-1 mb-2 group-hover:text-orange-600 transition-colors">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-3 leading-relaxed">
          {cuisines.join(', ')}
        </p>

        {/* Location & Delivery */}
        <div className="space-y-1 mb-4">
          <p className="text-xs text-gray-500 font-medium flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            {locality}
          </p>
          <p className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full inline-block">
            {sla.deliveryTime} min
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
