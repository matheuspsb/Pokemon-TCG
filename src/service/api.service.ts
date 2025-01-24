import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pokemontcg.io/v2/",
  timeout: 20000,
});

api.interceptors.request.use((config) => {
  config.headers["X-Api-Key"] = import.meta.env.VITE_API_KEY;
  return config;
});

export default api;
