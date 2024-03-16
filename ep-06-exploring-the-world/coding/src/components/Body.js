import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerContainer";
import { API_url } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setListOfRestaurant(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const fetchData = async () => {
    try {
      const data = await fetch(API_url);

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await data.json();
      console.log(json);

      const cardsIndex = json?.data?.cards.findIndex(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      if (cardsIndex === -1) {
        throw new Error("Failed to find the correct card index");
      }

      const listOfRestaurants =
        json?.data?.cards[cardsIndex]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      const filteredRestaurant =
        json?.data?.cards[cardsIndex]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (!listOfRestaurants) {
        throw new Error("Failed to extract restaurant data");
      }

      setListOfRestaurant(listOfRestaurants);
      setfilteredRestaurant(filteredRestaurant);
    } catch (error) {
      console.log("error hai api mein");
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const ratingsAboveFour = listOfRestaurants.filter(
              (res) => res.info.avgRating > 3.8
            );
            setfilteredRestaurant(ratingsAboveFour);
          }}
        >
          Ratings 4.0+
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setfilteredRestaurant(listOfRestaurants);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
