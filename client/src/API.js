import axios from "axios";

export default {
  // Saves a User to the database
  createUser: function (userData) {
    return axios.post("/api/User", userData);
  },
  // Deletes the User with the given id
  updateUserToDo: function (id, userData) {
    return axios.post("/api/User/" + id, userData);
  },
  // Gets the User with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/User/" + id);
  }
};
