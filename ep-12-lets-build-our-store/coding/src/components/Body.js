// import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { API_url } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("body", listofRestaurant);
  useEffect(() => {
    // console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_url);
    const response = await data.json();
    // console.log(response);
    // setListofRestaurant(
    //   response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants || {}
    // );
    // setfilteredRestaurant(
    //   response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants || {}
    // );
    setListofRestaurant(
      response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || {}
    );
    setfilteredRestaurant(
      response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || {}
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks you are offline</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listofRestaurant.length === 0 ? (
    <ShimmerContainer />
  ) : (
    <div className="body m-0 px-10">
      <div className="flex justify-center items-center mt-5">
        <div className="search">
          <input
            className="border border-solid border-black rounded-lg placeholder:pl-2 w-xs"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-1.5 bg-orange-400 m-2 rounded-md text-white text-sm"
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
          className="bg-green-500 text-white rounded-md p-1.5 mr-2 text-sm"
          onClick={() => {
            const ratingsAboveFour = listofRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredRestaurant(ratingsAboveFour);
          }}
        >
          Ratings 4.0 +{" "}
        </button>
        <button
          className="bg-black text-white rounded-md p-1.5 mr-2 text-sm"
          onClick={() => {
            setfilteredRestaurant(listofRestaurant);
          }}
        >
          Reset
        </button>
        <label>UserName</label>
        <input
          className="border border-black"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {/*  */}
            {res.info.promoted ? (
              <RestaurantCardPromoted resData={res} key={res.info.id} />
            ) : (
              <RestaurantCard resData={res} key={res.info.id} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
