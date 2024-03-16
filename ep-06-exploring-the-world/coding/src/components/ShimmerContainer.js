import Shimmer from "./Shimmer";

const ShimmerContainer = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="shimmer-filter">
        <button className="shimmer-btn"></button>
      </div>
      <div className="shimmer-container">
        {num.map((index) => (
          <Shimmer key={index} />
        ))}
      </div>
    </>
  );
};

export default ShimmerContainer;
