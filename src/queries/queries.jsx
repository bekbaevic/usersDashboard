import axios from "axios";
const URL = "https://api.escuelajs.co/api/v1/users";

// GET ALL USERS
export async function getData() {
  return await axios.get(URL).then((res) => res.data);
}

// GET A SINGLE USER
export async function getUser(id) {
  return await axios.get(`${URL}/${id}`).then((res) => res.data);
}

// CREATE A USER
export async function createUser(newUser) {
  return await axios.post(URL, newUser);
}

// UPDATE A USER
export async function updateUser(id, newData) {
  return await axios.put(`${URL}/${id}`, newData);
}

// DELETE A USER
export async function deleteUser(id) {
  return await axios.delete(`${URL}/${id}`);
}
