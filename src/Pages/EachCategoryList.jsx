// React
import { useState, useEffect } from "react";

function EachCategoryList() {
  // Furniture List from Each Category
  const [furnituresListByCategory, setfurnituresListByCategory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // TODO: Each Category furniture list.
    try {
      // Conection to BE for take the furniture List of Each Category (AxiosService), adn maybe to create a new Route in the BE
      // setfurnituresListByCategory(response)
    } catch (error) {
      // error message from error (400)
      // navigate to error page (500)
    }
  };
  return <div>EachCategoryList</div>;
}

export default EachCategoryList;
