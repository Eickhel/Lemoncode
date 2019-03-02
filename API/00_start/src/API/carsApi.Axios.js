import axios from "axios";
import * as baseAPI from "./carsApi";

export const getAllCars = () => {
  return axios.get(`${baseAPI.baseUrl}/api/cars/`);
};

export const getCarById = id => {
  return axios.get(`${baseAPI.baseUrl}/api/cars/${id}`);
};

export const addCar = car => {
  return axios.post(`${baseAPI.baseUrl}/api/cars/`, car);  
};
