// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_url } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("body");
  useEffect(() => {
    // console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_url);
    const response = await data.json();
    console.log(response);
    setListofRestaurant(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || {}
    );
    setfilteredRestaurant(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || {}
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks you are offline</h1>;

  return listofRestaurant.length === 0 ? (
    <ShimmerContainer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
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
              const filteredRestaurant = listofRestaurant.filter((res) =>
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
            const ratingsAboveFour = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurant(ratingsAboveFour);
          }}
        >
          Ratings 4.0 +{" "}
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setfilteredRestaurant(listofRestaurant);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resData={res} key={res.info.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
