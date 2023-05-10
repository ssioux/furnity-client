// Reack Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Axios Services
import { detailsFurnitureService } from "../services/furniture.services";



function FurnitureDetails() {
  // Id From Params
  const { furnitureId } = useParams();
  // Hook Helps to Navigate in router DOM
  const navigate = useNavigate();

  // Each Furniture Details from API
  const [furnitureDetails, setFurnitureDetails] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // Get Data in the BE for take the Furniture Details
      const response = await detailsFurnitureService(furnitureId);
      // Get the Data in the State
      setFurnitureDetails(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <section>
      {/* <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={furnitureDetails.picture} />}
      >
        <Meta
          title={furnitureDetails.name}
          description={furnitureDetails.description}
        />
      </Card> */}
      <img alt="example" src={furnitureDetails.picture} />
    </section>
  );
}

export default FurnitureDetails;
