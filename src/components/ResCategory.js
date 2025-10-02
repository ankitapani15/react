import FoodList from "./FoodList";

const ResCategory = ({ categoryInfo, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          {categoryInfo.title} ({categoryInfo.itemCards.length})
          <span> {showItems ? "🔺" : "🔻"} </span>
        </div>
        {/* items */}
        {showItems && <FoodList items={categoryInfo.itemCards} />}
      </div>
    </div>
  );
};
export default ResCategory;
