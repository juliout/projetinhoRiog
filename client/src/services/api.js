import axios from "axios";

const RiotApi = axios.create({
  baseURL: 'https://br1.api.riotgames.com'  
})

export default RiotApi;