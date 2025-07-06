import { RES_CARD_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    props.restrauntDetails.info;
  return (
    <div className="w-70 h-80 border-2 m-4 border-pink-500 shadow-md rounded p-4 flex flex-col justify-between hover:bg-red-100">
      <img
        className="w-full h-32 object-cover rounded"
        src={RES_CARD_IMG + cloudinaryImageId}
        alt={name}
      />
      <div>
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <h4 className="text-sm break-words whitespace-normal">
          {cuisines.join(", ")}
        </h4>
      </div>
      <div>
        <h4 className="text-sm">{avgRating} Stars</h4>
        <h4 className="text-sm">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default ResCard;
