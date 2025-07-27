import { CDN_url } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    sla: { slaString },
    cloudinaryImageId,
    areaName,
  } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_url + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="res-card-footer">
        <h4>{avgRating}</h4>
        <h4>{slaString}</h4>
      </div>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
