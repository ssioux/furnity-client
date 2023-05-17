import service from "./config.services";

// http://localhost:5005/ baseUrl

const listUserService = () => {
  return service.get("/api/user/list");
};

const userCartListService = () => {
  return service.get("/api/user/user-cart");
};

const detailsUserService = (userId) => {
  return service.get(`/api/user/${userId}/details`);
};
const updateUserService = (userId, userUpdate) => {
  return service.patch(`/api/user/${userId}/update`, userUpdate);
};

const addToCartUserService = (userId, furnyId) => {
  return service.patch(`/api/user/${userId}/addtocart`, furnyId);
};

const removeToCartUserService = (userId, furnyId) => {
  return service.patch(`/api/user/${userId}/removetocart`, furnyId);
};

const deleteUserService = (userId) => {
  return service.delete(`/api/category/${userId}/delete`);
};

export {
 
  listUserService,
  detailsUserService,
  updateUserService,
  deleteUserService,
  addToCartUserService,
  userCartListService,
  removeToCartUserService,
};