// React Hooks
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// Axios Services
import { userCartListService } from "../services/user.services"



function Cart() {

  const navigate = useNavigate()
  const [userCart, setUserCart] = useState([])

  useEffect(() => {
    
  getData()

  }, [])

  const getData = async() => {
    try {
      const res = await userCartListService()
      console.log("🚀 ~ file: Cart.jsx:23  ~ res:", res.data)
      setUserCart(res.data)
    } catch (error) {
      navigate("/error")
    }
  }
  
  return (
    <>
    
    {userCart.map((eachItem) => {
      return (
        
        <div key={eachItem._id} style={{display: "flex", justifyContent: "center", alignItems: "center"}}> 
          <img src={eachItem.picture} alt={eachItem.name} style={{width: "100px"}}/>
          <h5>{eachItem.name}</h5>

        </div>
       
        
      )
    })}
    
    </>
  )
}

export default Cart