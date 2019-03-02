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
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", `${baseAPI.baseUrl}/api/cars/`, true);    
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.onreadystatechange = function() {
      // if (this.readyState == 4 && this.status == 200) {
        resolve(true);
      // }
    };
    xhttp.send(JSON.stringify(car));
  });
};
