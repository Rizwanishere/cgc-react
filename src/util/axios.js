import axios from "axios";

const getInstance = () => {
  const host = "https://cgc-nodejs.onrender.com";
  const headers = {};
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: host,
    headers: headers,
  });
};
export default getInstance;