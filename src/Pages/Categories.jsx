// css
import "../css/category.css";

// Hooks
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Axios Services
import { listCategoryService } from "../services/category.services";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  console.log("🚀 ~ file: Categories.jsx:13 ~ Categories ~ categories:", categories)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // Connexion to DB taken the category list
      const res = await listCategoryService();
      setCategories(res.data);
    } catch (error) {
      navigate("/error");
    }
  };
  return (
    <section>
      <h2 className="margin-top">Categories</h2>
      <div className="category-container wrap">
        {categories.map((eachCategory) => {
          return (
            <Link
              to={`/category/${eachCategory._id}/furniture-list`}
              key={eachCategory._id}
              className="white"
            >
              <div className="category-box">
                <img src={eachCategory.picture} alt="category-pic" />
                <h2>{eachCategory.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
