import axios from "axios";

export const RioG = axios.create({
  baseURL: 'http://localhost:3000/'
})