import { useState } from "react";
import ItemList from "./ItemList";

const RestaunrantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

// commentig below useState, making component as a controlled
// const [showItems, setShowItems] = useState(false)
const handleClick= () => {
    // setShowItems(!showItems)
    setShowIndex();
}
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick} >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ?
          <span className="text-2xl">🔼</span> : <span className="text-2xl">🔽</span> }
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Body */}
    </div>
  );
};

export default RestaunrantCategory;
