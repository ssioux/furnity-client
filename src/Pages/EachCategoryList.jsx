// React Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// Axios Service
import { eachCategoryFurnitureListService } from "../services/furniture.services";

// AntDesign
import { Card } from "antd";
const { Meta } = Card;

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
    <section className="general-container wrap" style={{marginTop: "30px"}}>
      {furnituresListByCategory.map((eachFurny) => {
        return (
          <Link to={`/furniture/${eachFurny._id}/details`} key={eachFurny._id} >
            <Card
              hoverable
              style={{
                width: 240,
                margin: "20px",
              }}
              cover={<img alt="example" src={eachFurny.picture} />}
            >
              <Meta
                title={eachFurny.name}
                description={eachFurny.description}
              />
            </Card>
          </Link>
        );
      })}
    </section>
  );
}

export default EachCategoryList;
