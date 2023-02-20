import service from "./config.services";

// http://localhost:5005 baseUrl

const singupService = (newUser) => {
  return service.post("/auth/signup", newUser);
};

const loginService = (userInfo) => {
  return service.post("/auth/login", userInfo);
};

const verifyService = () => {
  return service.get("/auth/verify");
};

export { singupService, loginService, verifyService };
