import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const api = (axios) => {
  return {
    get: (url, config = {}) => axios.get(url, config),
    post: (url, data, config = {}) => axios.post(url, data, config),
    put: (url, data, config = {}) => axios.put(url, data, config),
    patch: (url, data, config = {}) => axios.patch(url, data, config),
    delete: (url, config = {}) => axios.delete(url, config),
  };
};

export default api(axiosInstance);
