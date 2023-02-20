import service from "./config.services"

// http://localhost:5005 baseUrl

const uploadPictureService = (pictureFile) => {
 return service.post("/api/upload", pictureFile)
}
export {
    uploadPictureService
}