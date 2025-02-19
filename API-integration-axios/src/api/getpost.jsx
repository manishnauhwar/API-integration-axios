import axios from "axios";
const api = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com"
})

const getpost=()=>{
    return api.get("/posts");
}
export default getpost;