// React Hooks
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

// Axios Service
import { eachCategoryFurnitureListService } from "../services/furniture.services";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/* Icon Properties  

<Icon
      iconName="Stopwatch"
      color="royalblue"
      size={96}
      className="align-top"
    /> */

import * as Icon from "react-bootstrap-icons";

function EachCategoryList() {
  // Category Id from params
  const { categoryId } = useParams();
  // Hook to Navigate
  const navigate = useNavigate();
  // User data
  const { authenticateUser } = useContext(AuthContext);
  

  // Furniture List from Each Category
  const [furnituresListByCategory, setfurnituresListByCategory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
 
    try {
      // Getting Furniture List By Category
      const response = await eachCategoryFurnitureListService(categoryId);

      setfurnituresListByCategory(response.data);
    } catch (error) {
      navigate("/error");
    }
  };
  const addFurnyToCart = async (Furniture) => {

    try {
      
    } catch (error) {
      
    }
  }

  return (
    <section className="general-container wrap" style={{ marginTop: "30px" }}>
      {furnituresListByCategory.map((eachFurny) => {
        return (
          <div style={{ margin: "30px" }} key={eachFurny._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={eachFurny.picture} />
              <Card.Body>
                <Card.Title>{eachFurny.name}</Card.Title>
                <Card.Text>{eachFurny.description}</Card.Text>
                <Button variant="primary" onClick={addFurnyToCart(eachFurny)}>
                  <Icon.CartPlus size={30} />
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </section>
  );
}

export default EachCategoryList;
