// css
import "../css/category.css";

// Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Axios Services
import { listCategoryService } from "../services/category.services";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // Connexion to DB taken the category list
      const res = await listCategoryService();
      console.log("🚀 ~ file: Categories.jsx:24 ~ getData ~ res:", res);

      setCategories(res.data);
    } catch (error) {
      navigate("/error");
    }
  };
  return (
    <section className="category-container wrap">
      {categories.map((eachCategory) => {
        return (
          <div key={eachCategory._id} className="category-box">
            <img src={eachCategory.image} alt="category-pic" />
            <h2>{eachCategory.name}</h2>
          </div>
        );
      })}
    </section>
  );
}

export default Categories;
