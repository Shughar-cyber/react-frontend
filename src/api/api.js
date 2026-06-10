
import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-nu-eight-50.vercel.app/api",
    withCredentials: true,
})