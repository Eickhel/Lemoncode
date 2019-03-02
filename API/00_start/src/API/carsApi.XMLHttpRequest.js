import * as baseAPI from "./carsApi";

export const getAllCars = () => {
  return new Promise((resolve, _) => {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resolve(xhttp.response);
      }
    };
    xhttp.open("GET", `${baseAPI.baseUrl}/api/cars/`, true);
    xhttp.send();
  });
};

export const getCarById = id => {
    return new Promise((resolve, _) => {
      var xhttp = new XMLHttpRequest();
      xhttp.responseType = "json";
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          resolve(xhttp.response);
        }
      };
      xhttp.open("GET", `${baseAPI.baseUrl}/api/cars/${id}`, true);
      xhttp.send();
    });
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
