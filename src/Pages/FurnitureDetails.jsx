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

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await detailsFurnitureService(furnitureId);
      console.log("first", response.data);
      setFurnitureDetails(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <>
      {furnitureDetails.map((Furny) => {
        return (
          <div key={Furny._id}>
            <h3>{Furny.name}</h3>
            <p>{Furny.description}</p>
            <img src={Furny.picture} alt="" style={{ width: 300 }} />
          </div>
        );
      })}
    </>
  );
}

export default FurnitureDetails;
