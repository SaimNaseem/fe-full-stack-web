import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "http://localhost:8083/api/v1/products",
  // You can add more default config here
});

export default api;
