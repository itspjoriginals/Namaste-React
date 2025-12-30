const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-6 py-8 md:px-12 md:py-12 lg:px-20 lg:py-16">
      <div className="max-w-4xl space-y-5">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md line-clamp-2">
          {title}
        </h1>

        {/* Overview */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed line-clamp-3">
          {overview}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          
          {/* Play Button */}
          <button className="group flex items-center gap-3 rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-md transition-all duration-300 hover:bg-red-600 hover:text-white">
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Play
          </button>

          {/* More Info Button */}
          <button className="flex items-center gap-3 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            More Info
          </button>

        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
