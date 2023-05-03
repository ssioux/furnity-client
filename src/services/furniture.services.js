import service from "./config.services";

// http://localhost:5005/ baseUrl

const listFurnitureService = () => {
  return service.get("/api/furniture/list");
};
const createFurnitureService = (furnitureToAdd) => {
  return service.post("/api/furniture/create", furnitureToAdd);
};
const detailsFurnitureService = (furnitureId) => {
  return service.get(`/api/furniture/${furnitureId}/details`);
};
const updateFurnitureService = (furnitureId, furnitureUpdate) => {
  return service.patch(`/api/furniture/${furnitureId}/update`, furnitureUpdate);
};
const deleteFurnitureService = (furnitureId) => {
  return service.delete(`/api/furniture/${furnitureId}/delete`);
};

export {
  listFurnitureService,
  createFurnitureService,
  detailsFurnitureService,
  updateFurnitureService,
  deleteFurnitureService,
 };
