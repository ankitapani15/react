import { RES_CARD_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const FoodList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    // console.log("Adding item to cart:", item.card.info);
    dispatch(addItem(item.card.info));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-3 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2"> {item.card.info.name}</div>
            <div>
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
            <div className="text-xs text-gray-600">
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4 relative">
            {/* <div className="absolute"> */}
            <img src={RES_CARD_IMG + item.card.info.cloudinaryImageId} />
            {/* </div> */}
            <button
              onClick={() => handleAddItem(item)}
              className="absolute bottom-0 right-2 bg-pink-600 text-white px-3 py-1 text-sm rounded font-semibold hover:bg-pink-700 shadow-md"
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FoodList;
