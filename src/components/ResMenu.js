import useResMenu from "../utils/useResMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResMenu = () => {
  const { resId } = useParams();

  const resDetails = useResMenu(resId);
  if (resDetails === null) return <Shimmer />;

  const menuItems =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
      ?.card?.itemCards ||
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7 || 4].card
      .card.categories[0].itemCards;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-red-50 rounded shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
        Restaurant Menu
      </h2>

      {resDetails?.cards?.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            {resDetails?.cards[0]?.card?.card?.text}
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {menuItems.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResMenu;
