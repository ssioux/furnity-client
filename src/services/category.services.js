import service from "./config.services";

// http://localhost:5005/ baseUrl

const listCategoryService = () => {
    return service.get("/api/category/list")
}
const createCategoryService = (categoryToAdd) => {
    return service.post("/api/category/create", categoryToAdd)
}
const detailsCategoryService = (categoryId) => {
     return service.get(`/api/category/${categoryId}/details`)
}
const updateCategoryService = (categoryId, categoryUpdate) => {
    return service.patch(`/api/category/${categoryId}/update`, categoryUpdate)
}
const deleteCategoryService = (categoryId) => {
    return service.delete(`/api/category/${categoryId}/delete`)
}

export{
    listCategoryService,
    createCategoryService,
    detailsCategoryService,
    updateCategoryService,
    deleteCategoryService
}