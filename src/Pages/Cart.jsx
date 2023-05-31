// React Hooks
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Axios Services
import {
  addUnitToItemService,
  removeFromCartUserService,
  removeUnitToItemService,
  userCartListService,
} from "../services/user.services";

// MDB bootstrap
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

// Snipper Loading
import GridLoader from "react-spinners/GridLoader";

function Cart(props) {
  const navigate = useNavigate();
  const [userCart, setUserCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, [totalPrice]);

  const getData = async () => {
    try {
      // User cart items
      const res = await userCartListService();
      setUserCart(res.data);
      setIsFetching(false);
      setTotalPrice(totalCartPrice());
    } catch (error) {
      navigate("/error");
    }
  };

  // Returns Sum Item User cart price.
  const totalCartPrice = () => {
    let counter = 0;

    userCart.forEach((eachItem) => (counter += eachItem.price));
    return counter;
  };
  // Erase Item from online user cart
  const eraseItemFromCart = async (furnyId) => {
    try {
      await removeFromCartUserService({ furnyId: furnyId });
      getData();
      props.dataNumberItemsCart();
    } catch (error) {
      navigate("/error");
    }
  };

  // Add ONE more unit to the item in the cart
  const addUnit = async (furnyId) => {
    try {
      await addUnitToItemService({furnyId: furnyId})
      getData();
      props.dataNumberItemsCart();
    } catch (error) {
      navigate("/error");
    }
  };

  // remove ONE more unit to the item in the cart
  const removeUnit = async (furnyId) => {
    try {
      await removeUnitToItemService({furnyId: furnyId})
      getData();
      props.dataNumberItemsCart();
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    // HEADER
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <Link to="/categories" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </Link>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">
                          You have {userCart.length} items in your cart
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                    {/************************  USER ITEMS *************************/}
                    {isFetching === true ? (
                      <GridLoader
                        color="rgb(21, 21, 170)"
                        loading
                        margin={10}
                        size={15}
                        speedMultiplier={1}
                        className="loader"
                      />
                    ) : (
                      userCart.map((eachItem) => {
                        return (
                          <MDBCard className="mb-3" key={eachItem._id}>
                            <MDBCardBody>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <MDBCardImage
                                      src={eachItem.picture}
                                      fluid
                                      className="rounded-3"
                                      style={{ width: "65px" }}
                                      alt={eachItem.name}
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <MDBTypography tag="h5">
                                      {eachItem.name}
                                    </MDBTypography>
                                    <p className="small mb-0">
                                      {eachItem.description}
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  {/* button 1 */}
                                  <div style={{ width: "50px" }}>
                                    <MDBIcon
                                      fas
                                      icon="minus-circle"
                                      onClick={() => removeUnit(eachItem._id)}
                                      style={{cursor: "pointer"}}
                                    />

                                    {/* UNITS */}
                                  </div>
                                  <div style={{ width: "50px" }}>
                                    <MDBTypography
                                      tag="h5"
                                      className="fw-normal mb-0"
                                    >
                                      {eachItem.units}
                                    </MDBTypography>
                                  </div>
                                  {/* button 2 */}
                                  <div style={{ width: "50px" }}>
                                    <MDBIcon
                                      fas
                                      icon="plus-circle"
                                      onClick={() => addUnit(eachItem._id)}
                                      style={{cursor: "pointer"}}
                                    />
                                  </div>
                                  <div style={{ width: "80px" }}>
                                    <MDBTypography tag="h5" className="mb-0">
                                      {eachItem.price} €
                                    </MDBTypography>
                                  </div>

                                  <MDBIcon
                                    fas
                                    icon="trash-alt"
                                    onClick={() =>
                                      eraseItemFromCart(eachItem._id)
                                    }
                                    style={{cursor: "pointer"}}
                                  />
                                </div>
                              </div>
                            </MDBCardBody>
                          </MDBCard>
                        );
                      })
                    )}
                  </MDBCol>

                  {/* ************************* CARD DETAILS *********************** */}
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            fluid
                            className="rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form className="mt-4">
                          <MDBInput
                            className="mb-4"
                            label="Cardholder's Name"
                            type="text"
                            size="lg"
                            placeholder="Cardholder's Name"
                            contrast
                          />

                          <MDBInput
                            className="mb-4"
                            label="Card Number"
                            type="text"
                            size="lg"
                            minLength="19"
                            maxLength="19"
                            placeholder="1234 5678 9012 3457"
                            contrast
                          />

                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Expiration"
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                placeholder="MM/YYYY"
                                contrast
                              />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Cvv"
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                                placeholder="&#9679;&#9679;&#9679;"
                                contrast
                              />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">{totalPrice} €</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <MDBBtn color="info" block size="lg">
                          <div className="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Cart;
