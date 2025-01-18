import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
