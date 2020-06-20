import axios from "axios";

const BASE_URL = "https://instasport.co/dashboard/api/v1/clubs/"


export const fetchAllClubs = () => {
  return axios.get(BASE_URL)
}