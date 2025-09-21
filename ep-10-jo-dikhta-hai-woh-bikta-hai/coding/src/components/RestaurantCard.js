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
    <div className="mb-7 p-2 w-[260px] min-h-[180px] bg-white rounded-lg border-[1px] border-black">
      <img
        className="res-logo rounded-lg w-full h-[180px] object-cover"
        src={CDN_url + cloudinaryImageId}
      />
      <h3 className="text-base font-black mt-3 line-clamp-1">{name}</h3>
      <h4 className="line-clamp-1">{cuisines.join(", ")}</h4>
      <div className="res-card-footer">
        <h4>{avgRating}</h4>
        <h4>{slaString}</h4>
      </div>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
