const Shimmer = () => {
  return (
    <div className="body">
      <div className="shimmer-search">
        <div className="shimmer-search-input"></div>
        <div className="shimmer-search-btn"></div>
      </div>

    
      <div className="shimmer-container">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div className="shimmer-card" key={index}></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
