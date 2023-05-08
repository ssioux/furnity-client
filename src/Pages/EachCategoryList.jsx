// React Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// Axios Service
import { eachCategoryFurnitureListService } from "../services/furniture.services";

function EachCategoryList() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Furniture List from Each Category
  const [furnituresListByCategory, setfurnituresListByCategory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // TODO validators in BE
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
        return (
          <Link to={`/furniture/${eachFurny._id}/details`} key={eachFurny._id}>
            <h3>{eachFurny.name}</h3>
            <p>{eachFurny.description}</p>
            <img src={eachFurny.picture} alt="" style={{ width: 300 }} />
          </Link>
        );
      })}
    </>
  );
}

export default EachCategoryList;
