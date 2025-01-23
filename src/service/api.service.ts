import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pokemontcg.io/v2/",
  timeout: 20000,
});

api.interceptors.request.use((config) => {
  config.headers["X-Api-Key"] = "92bb93a7-e42b-499c-ac7b-1a4efa23c9c4";
  return config;
});

export default api;
