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
  return api.delete(`/posts/${id}`);
} 

// ------POST METHOD-----
export const postdata =(post)=>{
  return api.post("/posts",post)
};

//------PUT METHOD-----
export const updatepost = (id,post)=>{
  return api.put(`/posts/${id}`,post)
}