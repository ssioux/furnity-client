import service from "./config.services";

// http://localhost:5005/ baseUrl

const listUserService = () => {
  return service.get("/api/User/list");
};
const detailsUserService = (userId) => {
  return service.get(`/api/User/${userId}/details`);
};
const updateUserService = (userId, userUpdate) => {
  return service.patch(`/api/User/${userId}/update`, userUpdate);
};
const deleteUserService = (userId) => {
  return service.delete(`/api/category/${userId}/delete`);
};

export {
  listUserService,
  detailsUserService,
  updateUserService,
  deleteUserService,
};