import api from "./api";

export const listUsers = (config) => {
  return api
    .get("/users", config)
    .then((result) => result.data)
    .catch((err) => err);
};

export const getUser = (id, config) => {
  return api
    .get(`/users/${id}`, config)
    .then((result) => result.data)
    .catch((err) => err);
};

export const createUser = (data, config) => {
  return api
    .post(`/users`, data, config)
    .then((result) => result.data)
    .catch((err) => err);
};

export const updateUser = (id, data, config) => {
  return api
    .put(`/users/${id}`, data, config)
    .then((result) => result.data)
    .catch((err) => err);
};

export const deleteUser = (id, config) => {
  return api
    .delete(`/users/${id}`, config)
    .then((result) => result.data)
    .catch((err) => err);
};
