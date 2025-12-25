const Shimmer = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      {/* Search bar shimmer */}
      <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
        <div className="flex-1">
          <div className="h-11 w-full rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        </div>
        <div className="w-24 h-11 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-xl"></div>
      </div>

      {/* Filters shimmer */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="h-10 w-44 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-full"></div>
        <div className="h-10 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-full opacity-70"></div>
      </div>

      {/* Restaurants grid shimmer */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
              {/* Image shimmer */}
              <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
              
              {/* Content shimmer */}
              <div className="p-5 space-y-3">
                {/* Name */}
                <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md w-3/4"></div>
                
                {/* Cuisines */}
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md w-5/6"></div>
                
                {/* Location */}
                <div className="h-3.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md w-2/3"></div>
                
                {/* Rating & Delivery */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>
                    <div className="h-3 w-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>
                  </div>
                  <div className="h-6 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
