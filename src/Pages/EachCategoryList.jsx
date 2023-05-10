// React Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";

// Axios Service
import { eachCategoryFurnitureListService } from "../services/furniture.services";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EachCategoryList() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Furniture List from Each Category
  const [furnituresListByCategory, setfurnituresListByCategory] = useState([]);
  console.log("🚀 ~ file: EachCategoryList.jsx:18 ~ EachCategoryList ~ furnituresListByCategory:", furnituresListByCategory)

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
    <section className="general-container wrap" style={{ marginTop: "30px" }}>
      {furnituresListByCategory.map((eachFurny) => {
        return (
          <div style={{ margin: "30px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={eachFurny.picture} />
              <Card.Body>
                <Card.Title>{eachFurny.name}</Card.Title>
                <Card.Text>{eachFurny.description}</Card.Text>
                <Button variant="primary">Buy Icon</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </section>
  );
}

export default EachCategoryList;
