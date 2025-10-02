import { RES_CARD_IMG } from "../utils/constants";
const FoodList = ({ items }) => {
  console.log(items);
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
          <div className="w-3/12 p-4">
            {/* <div className="absolute"> */}
            <img src={RES_CARD_IMG + item.card.info.imageId} />
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FoodList;
