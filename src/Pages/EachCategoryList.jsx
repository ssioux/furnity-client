// React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EachCategoryList() {
  const categoryId = useParams();

  // Furniture List from Each Category
  const [furnituresListByCategory, setfurnituresListByCategory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // TODO: Each Category furniture list.
    try {

      // const response = await axiosService(categoryId)
      // setfurnituresListByCategory(response)
    } catch (error) {
      // error message from error (400)
      // navigate to error page (500)
    }
  };
  return <div>EachCategoryList</div>;
}

export default EachCategoryList;
