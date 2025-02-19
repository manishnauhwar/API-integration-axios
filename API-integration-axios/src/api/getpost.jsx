import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})
// --- GET POSTS----
export const getpost = () => {
  return api.get("/posts");
}


// ----DELETE POSTS----
export const deletepost = (id) => {
  return api.get(`/posts/${id}`);
} 