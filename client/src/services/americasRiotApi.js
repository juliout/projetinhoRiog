import axios from "axios";

const americasApi = axios.create({
  baseURL: 'https://americas.api.riotgames.com'  
})

export default americasApi;