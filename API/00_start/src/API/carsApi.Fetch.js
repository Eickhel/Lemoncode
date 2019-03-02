import * as baseAPI from "./carsApi";

export const getAllCars = () => {
  return fetch(`${baseAPI.baseUrl}/api/cars/`);
};

export const getCarById = id => {
    return fetch(`${baseAPI.baseUrl}/api/cars/${id}`);
};

export const addCar = car => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      car["car_id"] = data.length + 1;
      data.push(car);
      resolve("ok"); // TODO: Check with browser
    }, 500);
  });
};
