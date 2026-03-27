import Shimmer from "./Shimmer";

const ShimmerContainer = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="flex justify-evenly flex-wrap mt-20 px-10">
        {num.map((index) => (
          <Shimmer key={index} />
        ))}
      </div>
    </>
  );
};

export default ShimmerContainer;
