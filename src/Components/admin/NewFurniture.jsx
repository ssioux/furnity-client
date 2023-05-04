// CSS
import "../../css/admin.css";

// TODO Css for the select.

// React
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Cloudinary
import { uploadPictureService } from "../../services/upload.services";
// Snipper Loading
import GridLoader from "react-spinners/GridLoader";
// Axios Services
import { createFurnitureService } from "../../services/furniture.services";
import { listCategoryService } from "../../services/category.services";

function NewFurniture() {
  const navigate = useNavigate();
  // input values
  const [furnitureNameInput, setFurnitureNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [categoryInput, setCategoryInput] = useState();
  const [listCategory, setListCategory] = useState([]);

  // Keep the picture from cloudinary
  const [pictureURL, setPictureUrl] = useState("");
  // Cloudinary loading
  const [isLoadingPicture, setIsLoadingPicture] = useState(false);
  // errorMessages from BE
  const [errorMessage, setErrorMessage] = useState("");
  

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // Category List from DB
      const res = await listCategoryService();
      setListCategory(res.data);
    } catch (error) {
      navigate("/error");
    }
  };

  // funtion that send the user picture to cloudinary and receive it
  const handlePictureChange = async (e) => {
    setIsLoadingPicture(true);

    // Send the pic to cloudinary
    const sendObj = new FormData();

    sendObj.append("picture", e.target.files[0]);

    try {
      const response = await uploadPictureService(sendObj);

      // Receive the data.pic from cloudinary for show it in the form
      setPictureUrl(response.data.picture);
      // The process is finished
      setIsLoadingPicture(false);
    } catch (error) {
      navigate("/error");
    }
  };

  // Function that creates a new Furniture
  const handleNewFurniture = async (e) => {
    e.preventDefault();

      const newFurniture = {
      name: furnitureNameInput,
      description: descriptionInput,
      picture: pictureURL,
      price: priceInput,
      category: categoryInput,
    };

    try {
      // Service that connect to the DB for create the New Furniture
      await createFurnitureService(newFurniture);
      // redirect to:
      navigate("/categories");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        navigate("/error");
      }
    }
  };


  return (
    <div className="general-admin">
      <section className="adminNav">
        <Link to="/admin/new-category">New Category</Link>
        <Link to="/admin/new-furniture">New Furniture</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/clients">Clients</Link>
      </section>

      <section className="general-container">
        <div className="form-container">
          <form>
            <h3>Create a New Furniture</h3>

            <div className="input-container">
              <input
                value={furnitureNameInput}
                onChange={(e) => setFurnitureNameInput(e.target.value)}
              />
              <label className={furnitureNameInput && "filled"} htmlFor="name">
                Name
              </label>
            </div>
            <div className="input-container">
              <input
                value={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
              />
              <label
                className={descriptionInput && "filled"}
                htmlFor="description"
              >
                Description
              </label>
            </div>

            <div className="input-container">
              <input
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
              />
              <label className={priceInput && "filled"} htmlFor="price">
                Price
              </label>
            </div>

            <div className="input-container">
              <label htmlFor="category">Choose Category</label>

              <select onChange={(e) => setCategoryInput(e.target.value)}>
                {listCategory?.map((opt) => {
                  return (
                  <option key={opt._id} value={opt._id}>
                    {opt.name}
                  </option>
                  )
                  
                  })}
              </select>
            </div>

            <div className="input-container">
              <input
                type="file"
                onChange={handlePictureChange}
                name="picture"
              />
              <label className="filled" htmlFor="picture">
                Image
              </label>
            </div>

            {/* Show the picture in this form after Load */}
            {isLoadingPicture === true && (
              <GridLoader
                color="rgb(21, 21, 170)"
                loading
                margin={10}
                size={15}
                speedMultiplier={1}
                className="loader"
              />
            )}

            {pictureURL !== "" ? (
              <img src={pictureURL} alt="pict" className="uploader-img" />
            ) : (
              ""
            )}

            <button
              onClick={handleNewFurniture}
              type="submit"
              className="general-btn-blue"
            >
              Add Category
            </button>
            {errorMessage !== "" && (
              <p className="error-message"> * {errorMessage}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default NewFurniture;
