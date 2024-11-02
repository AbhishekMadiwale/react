import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()
  const handleItemAdd = (item) => {
    // dispatch action here
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="p-3 m-3 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div>
              <span className="font-bold">{items.card.info.name}</span>
              <span className="font-bold px-2">
                - ₹{" "}
                {items.card.info.defaultPrice
                  ? items.card.info.defaultPrice / 100
                  : items.card.info.price / 100}
              </span>

              <p className="text-xs w-11/12">{items.card.info.description}</p>
            </div>

            <div>
              <div className="absolute w-auto">
                <button className="bg-black text-white shadow-lg p-2 rounded-lg"
                  onClick={() => handleItemAdd(items)}
                >
                  {" "}
                  Add +
                </button>
              </div>
              <img src={CDN_URL + items.card.info.imageId} className="w-auto" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
