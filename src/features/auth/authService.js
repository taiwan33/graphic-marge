import api from "../../api/api";

// register user
const register = async (userData) => {
  const response = await api.post("users/register/", userData);
  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }
  return response.data;
};

// login user

const login = async (userData) => {
  const response = await api.post("users/login/", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// logout

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
