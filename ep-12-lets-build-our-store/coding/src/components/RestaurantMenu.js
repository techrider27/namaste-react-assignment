import ShimmerContainer from "./ShimmerContainer";
import { useParams } from "react-router-dom";
// import { MENU_url } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_url } from "../utils/constants";
import RestauranCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const dummy = "Dummy data";

  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) return <ShimmerContainer />;

  const { name, cuisines, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const { title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu p-5 flex items-center flex-col">
      <h1 className="text-4xl font-black mb-3">{name}</h1>
      <img
        className="w-full h-52 object-contain"
        src={CDN_url + cloudinaryImageId}
      ></img>
      {/* <p className="font-semibold">{title}</p> */}
      <h2 className="text-2xl font-semibold my-3">{cuisines.join(", ")}</h2>
      {/* controlled component */}
      {categories.map((category, index) => (
        <RestauranCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
