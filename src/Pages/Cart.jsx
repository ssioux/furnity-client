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
      console.log("🚀 ~ file: Cart.jsx:23  ~ res:", res)
      setUserCart(res.data)
    } catch (error) {
      navigate("/error")
    }
  }
  
  return (
    <>
    
    
    
    </>
  )
}

export default Cart