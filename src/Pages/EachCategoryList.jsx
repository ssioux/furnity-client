// React Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Axios Service
import { eachCategoryFurnitureListService } from "../services/furniture.services";

function EachCategoryList() {

  const categoryId = useParams();
  const navigate = useNavigate();

  console.log("first", categoryId)

  // Furniture List from Each Category
  const [furnituresListByCategory, setfurnituresListByCategory] = useState([]);
  

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // TODO: Each Category furniture list.
    try {

      const response = await eachCategoryFurnitureListService(categoryId)
      console.log("second", response)
      setfurnituresListByCategory(response.data)
    } catch (error) {
      console.log("third", error)
      navigate("/error");
    }
  };
  return <div>EachCategoryList</div>;
}

export default EachCategoryList;
