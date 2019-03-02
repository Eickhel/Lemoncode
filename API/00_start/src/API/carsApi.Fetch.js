import * as baseAPI from "./carsApi";

export const getAllCars = () => {
  return fetch(`${baseAPI.baseUrl}/api/cars/`);
};

export const getCarById = id => {
  return fetch(`${baseAPI.baseUrl}/api/cars/${id}`);
};

export const addCar = car => {
  return fetch(`${baseAPI.baseUrl}/api/cars/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  });
};
