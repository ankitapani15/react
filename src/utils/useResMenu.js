import { useState, useEffect } from "react";
import { mockMenuData } from "./mockMenuData";

const useResMenu = (resId) => {
  const [resDetails, setResDetails] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const json = mockMenuData;
    setResDetails(json.data);
  };

  return resDetails;
};

export default useResMenu;
