// CSS
import "../../css/admin.css"
// React
import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
// Services
import { createCategoryService } from "../../services/category.services";
// Cloudinary
import { uploadPictureService } from "../../services/upload.services"

function NewCategory() {
 const navigate = useNavigate()

 // input values
 const [categoryNameInput, setCategoryNameInput] = useState("");
 const [descriptionInput, setDescriptionInput] = useState("");
 

 // errorMessages from BE
 const [errorMessage, setErrorMessage] = useState("");

 // Keep the picture from cloudinary
 const [pictureURL, setPictureUrl] = useState("");
 // Cloudinary loading
 const [isLoadingPicture, setIsLoadingPicture] = useState(false);



 // funtion that send the user picture to cloudinary and receive it
 const handlePictureChange = async (e) => {
  console.log(e)
  setIsLoadingPicture(true);

  // Send the pic to cloudinary
  const sendObj = new FormData();
  
  sendObj.append("picture", e.target.files[0]);
  

  try {
    const response = await uploadPictureService(sendObj);
    console.log("🚀 ~ handlePictureChange ~ response", response)
    
    // Receive the data.pic from cloudinary for show it in the form
    setPictureUrl(response.data.picture);
    // The process is finished
    setIsLoadingPicture(false);
  } catch (error) {
    console.log("errorrrrrr",error)
    navigate("/error");
  }
};

// Function that creates a new Category
 const handleNewCategory = async (e) => {
  e.preventDefault();

  const newCategory = {
    name: categoryNameInput,
    description: descriptionInput,
    picture: pictureURL,
    };

  try {
    await createCategoryService(newCategory);
    // navigate("/login");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      setErrorMessage(error.response.data.message);
    } else {
      navigate("/error");
    }
  }
 }
  return (
    <div>
    <section className="adminNav">

    <Link to="/admin/new-category">New Category</Link>
    <Link to="/admin/new-furniture">New Furniture</Link>
    <Link to="/admin/orders">Orders</Link>
    <Link to="/admin/clients">Clients</Link>

    </section>
    <section className="general-container">
      <div className="form-container">
        <form >
          <h3>Create a New Category</h3>

          <div className="input-container">
            <input value={categoryNameInput} onChange={(e) => setCategoryNameInput(e.target.value)} />
            <label className={categoryNameInput && "filled"} htmlFor="name">
              Name
            </label>
          </div>
          <div className="input-container">
            <input value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
            <label className={descriptionInput && "filled"} htmlFor="description">
              Description
            </label>
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
           {isLoadingPicture === true && <p>...loading picture</p>}
          {pictureURL !== "" ? (
            <img src={pictureURL} alt="pict" className="uploader-img" />
          ) : (
            <p> [ No Picture Selected ]</p>
          )}


          <button
            type="submit"
            onClick={handleNewCategory}
           className="general-btn-blue"
          >
            Register
          </button>
          {errorMessage !== "" && (
            <p className="error-message"> * {errorMessage}</p>
          )}

        </form>
      </div>

    
    </section>
    </div>
  )
}

export default NewCategory