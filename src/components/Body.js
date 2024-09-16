import ResCard from "./ResCard";
import restrauntList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restrauntList.map((restrauntInfo) => {
          return (
            <ResCard
              key={restrauntInfo.info.id}
              restrauntDetails={restrauntInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
