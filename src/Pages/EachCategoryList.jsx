// React Hooks
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

// Axios Service
import { eachCategoryFurnitureListService } from "../services/furniture.services";
import {
  addToCartUserService,
  removeFromCartUserService,
  userCartListService,
} from "../services/user.services";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/* Icon Properties  

<Icon
      iconName="Stopwatch"
      color="royalblue"
      size={96}
      className="align-top"
    /> */

import * as Icon from "react-bootstrap-icons";

function EachCategoryList() {
  // Category Id from params
  const { categoryId } = useParams();
  // Hook to Navigate
  const navigate = useNavigate();
  // User data
  const { isLoggedIn, user } = useContext(AuthContext);

  const userId = user?._id;

  console.log(
    "🚀 ~ file: EachCategoryList.jsx:35 ~ EachCategoryList ~ userId:",
    userId
  );

  // Furniture List from Each Category
  const [furnituresListByCategory, setfurnituresListByCategory] = useState([]);
  const [currentCart, setCurrentCart] = useState([]);
  console.log(
    "🚀 ~ file: EachCategoryList.jsx:43 ~ EachCategoryList ~ currentCart:",
    currentCart
  );

  // Function that filter the items from the user cart with the category list, to see what items has the user
  const hasFurny = (eachFurnyId) => {
    const searchingFurnyInCart = currentCart.filter(
      (eachItem) => eachItem.toString() === eachFurnyId.toString()
    )[0];

    return searchingFurnyInCart;
  };
  // const userHasFurny = user.cart.filter((eachItem) => eachItem._id.toString() === furnituresListByCategory._id.toString())

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // Getting Furniture List By Category
      const response = await eachCategoryFurnitureListService(categoryId);
      const userCart = await userCartListService(userId);
      console.log("🚀 getData ~ userCart:", userCart);

      setfurnituresListByCategory(response.data);
      setCurrentCart(userCart.data);
    } catch (error) {
      navigate("/error");
    }
  };

  // TODO: button working if is registered, BE remove addToSet and add normal push.
  const addFurnyToCart = async (furnyId, furnyName) => {
    try {
      alert(`${furnyName}, added to cart`);
      // service adding item to the current user cart
      await addToCartUserService(userId, { furnyId: furnyId });
      // Load the page
      getData();
    } catch (error) {
      navigate("/error");
    }
  };

  const removeFurnyToCart = async (furnyId) => {
    try {
      // service removing item to the current user cart
      await removeFromCartUserService(userId, { furnyId: furnyId });
      // Load the page
      getData();
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <section className="general-container wrap" style={{ marginTop: "30px" }}>
      {furnituresListByCategory.map((eachFurny) => {
        return (
          <div style={{ margin: "30px" }} key={eachFurny._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={eachFurny.picture} />
              <Card.Body>
                <Card.Title>{eachFurny.name}</Card.Title>
                <Card.Text>{eachFurny.description}</Card.Text>
                {/* Button filtered by logged */}
                {/* {isLoggedIn ? (
                  <Button
                    variant="primary"
                    onClick={() => addFurnyToCart(eachFurny._id)}
                  >
                    <Icon.CartPlus size={30} />
                  </Button>
                ) : (
                  <Button variant="primary" onClick={() => navigate("/signup")}>
                    <Icon.CartPlus size={30} />
                  </Button>
                )} */}

                {hasFurny(eachFurny._id) === eachFurny._id ? (
                  <Button
                    variant="danger"
                    onClick={() => removeFurnyToCart(eachFurny._id)}
                  >
                    <Icon.CartX size={30} />
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() =>
                      addFurnyToCart(eachFurny._id, eachFurny.name)
                    }
                  >
                    <Icon.CartPlus size={30} />
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </section>
  );
}

export default EachCategoryList;
