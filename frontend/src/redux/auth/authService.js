import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth/",
  withCredentials: true
});

export const register = async (userData) => {
  const res = await API.post("register", userData);
  return res.data;
};

export const login = async (userData) => {
  const res = await API.post("login", userData);
  return res.data;
};
export const logout = async () => {
    const res = await API.post("logout");
    return res.data;
};
