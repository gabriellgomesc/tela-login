import axios from "axios";

const clienteHttp = axios.create({
  baseURL: "http://localhost:3000/",
  // baseURL: "http://0.0.0.0:8081/",
});

export default clienteHttp;
