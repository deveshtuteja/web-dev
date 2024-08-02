import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime } = {},
  } = resData || {};

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="res-card m-4 p-4 w-[265px] text-center rounded-lg bg-gray-100 hover:bg-gray-200" data-testid="resCard">
      <img
        className="res-logo rounded-lg"
        alt={name}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>User - {loggedInUser}</h4>
    </div>
  );
};

//Higher order component
//input RestaurantCard=>RestaurantCardPromoted

export default RestaurantCard;