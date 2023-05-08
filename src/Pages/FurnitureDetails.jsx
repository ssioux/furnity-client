// Reack Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Axios Services
import { detailsFurnitureService } from "../services/furniture.services";

function FurnitureDetails() {
  // Id From Params
  const { furnitureId } = useParams();

  const navigate = useNavigate();

  // Each Furniture Details from API
  const [furnitureDetails, setFurnitureDetails] = useState([]);
  console.log(
    "🚀 -1 fd-FurnitureDetails ~ furnitureDetails:",
    furnitureDetails
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await detailsFurnitureService(furnitureId);
      console.log("-2fd-", response.data);
      setFurnitureDetails(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <section>

      <h1>{furnitureDetails.name}</h1>
      <img src={furnitureDetails.picture} alt="" style={{ width: 300 }} />
      <p>{furnitureDetails.description}</p>
      <h2>{furnitureDetails.price} €</h2>

    </section>
  );
}

export default FurnitureDetails;
