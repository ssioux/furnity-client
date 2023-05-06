// React Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Axios Service
import { eachCategoryFurnitureListService } from "../services/furniture.services";

function EachCategoryList() {
  const categoryId = useParams();
  const navigate = useNavigate();

  console.log("first", categoryId);

  // Furniture List from Each Category
  const [furnituresListByCategory, setfurnituresListByCategory] = useState([]);
  console.log(
    "🚀 ~ file: EachCategoryList.jsx:17 ~ EachCategoryList ~ furnituresListByCategory:",
    furnituresListByCategory
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // TODO: Each Category furniture list.
    try {
      const response = await eachCategoryFurnitureListService(categoryId);

      setfurnituresListByCategory(response.data);
    } catch (error) {
      navigate("/error");
    }
  };
  return (
    <>
      {furnituresListByCategory.map((eachFurny) => {
        return <img src={eachFurny.picture} alt="" style={{ width: 300 }} />;
      })}
    </>
  );
}

export default EachCategoryList;
