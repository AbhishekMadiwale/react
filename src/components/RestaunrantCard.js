import { CDN_URL } from "../utils/constants";

const RestaunrantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;

  console.log(resData );
  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-xl text-wrap hover:bg-gray-200">
      <img
        className="res-logo rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

// Higher order component
// input - RestaurantCard ==> RestaurantCardDiscount

export const priceDiscount = (RestaunrantCard) => {
  return (props) => {
    return (
      <div>
        <labe className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Discount
        </labe>
        <RestaunrantCard {...props} />
      </div>
    );
  };
};

export default RestaunrantCard;
