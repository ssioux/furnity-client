// Hooks
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
// Axios Services
import { listCategoryService } from "../services/category.services"

function Categories() {

const navigate = useNavigate()
const [categories, setCategories] = useState([])



useEffect(() => {
  
  getData()
 
}, [])

const getData = async () => {
  try {
    // Connexion to DB taken the category list
    const res = await listCategoryService()
    console.log("🚀 ~ file: Categories.jsx:24 ~ getData ~ res:", res)
    

    setCategories(res.data)

  } catch (error) {
    navigate('/error')
  }
}
  return (
    <div>

      {categories.map((eachCategory) => {
              return (
               <div key={eachCategory._id}>
                 <img src={eachCategory.image} alt="category-pic"/> 
               </div>
              );
            })}


    </div>
  )
}

export default Categories