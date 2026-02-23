import { useState } from "react";
import ItemList from "./ItemList";

const RestauranCategory = ({ data, showItems, setShowIndex, dummy}) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // console.log("clicked");
    setShowIndex();
  };
  return (
    <div className="max-w-2xl">
      <div
        className="w-2xl bg-gray-200 shadow-lg p-4 my-4 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold text-md">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span> 🔽</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestauranCategory;
