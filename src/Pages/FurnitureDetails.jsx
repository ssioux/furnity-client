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

      <h1>{furnitureDetails.name}</h1>
      <img src={furnitureDetails.picture} alt="" style={{ width: 300 }} />
      <p>{furnitureDetails.description}</p>
      <h2>{furnitureDetails.price} €</h2>

    </section>
  );
}

export default FurnitureDetails;
