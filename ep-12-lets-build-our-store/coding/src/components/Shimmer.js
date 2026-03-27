const Shimmer = () => {
  return (
    <div className="w-[260px] min-h-[180px] bg-white mb-7 rounded-lg p-2 animate-pulse">
      <div className="rounded-lg w-full h-[110px] bg-[#e8e8e8]"></div>
      <div className="w-40 bg-[#e8e8e8] h-5 my-2 rounded-lg"></div>
      <div className="w-15 bg-[#e8e8e8] h-5 my-2 rounded-lg"></div>
      <div className="flex justify-between">
        <div className="w-20 h-5 bg-[#e8e8e8] rounded-lg"></div>
        <div className="w-20 h-5 bg-[#e8e8e8] rounded-lg"></div>
      </div>
      <div className="shimmer-add"></div>
    </div>
  );
};

export default Shimmer;
