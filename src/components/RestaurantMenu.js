import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaunrantCategory from "./RestauratCategory";
const RestaunrantMenu = () => {
  // Commenting line useState as we are going to use custom hooks
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0)

  // commenting useEffect and fetchMenu cause
  // same functionality will write in custom hook

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();

  //   console.log(json.data);
  //   console.log(json?.data?.cards[2]?.card?.card?.info?.id);
  //   console.log(json?.data?.cards[2]?.card?.card?.info?.name);
  //   console.log(
  //     resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //       ?.itemCards[0]?.card.info.name
  //   );
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories", categories);

  // console.log(itemCards);

  return (
    <div className="text-center my-6">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaunrantCategory 
          data={category?.card?.card}

          // component is controlled one
          // Parent controlling which accordion should open and close
          // This is a controlled component now
          showItems = {index === showIndex ? true : false}  
          setShowIndex ={() => {setShowIndex(index)}}
        />
      ))}
      {/* <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3> */}
      {/* <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.defaultPrice / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaunrantMenu;
