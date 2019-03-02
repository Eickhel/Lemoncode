import { addCarRows, retrieveCarId, populateEditCarForm, retrieveCarFormEditCarForm, cleanTable } from "./uiHelpers";
import { getAllCars, getCarById, addCar } from "./API/carsApi.double";
import * as axiosAPI from "./API/carsApi.Axios";
import * as fetchAPI from "./API/carsApi.Fetch";
import * as xhrAPI from "./API/carsApi.XMLHttpRequest";

document.addEventListener("DOMContentLoaded", () => {
  // Axios
  const buttonLoadCarsAxios = document.getElementById("loadCarsAxios");
  const buttonLoadCarAxios = document.getElementById("loadCarAxios");
  const buttonAddCarAxios = document.getElementById("addCarAxios");

  buttonLoadCarsAxios.addEventListener("click", event => {
    event.stopPropagation();
    cleanTable("cars-table");
    axiosAPI.getAllCars().then(result => addCarRows(result.data, "cars-table"));
  });

  buttonLoadCarAxios.addEventListener("click", event => {
    event.stopPropagation();
    const carId = retrieveCarId();
    axiosAPI.getCarById(carId).then(result => {
      populateEditCarForm(result.data);
    });
  });

  buttonAddCarAxios.addEventListener("click", event => {
    event.stopPropagation();
    event.preventDefault();
    const car = retrieveCarFormEditCarForm();
    axiosAPI.addCar(car)
      .then(_ => {
        cleanTable("cars-table");
        return axiosAPI.getAllCars();
      })
      .then(result => {
        addCarRows(result.data, "cars-table");
      });
  });

  // Fetch
  const buttonLoadCarsFetch = document.getElementById("loadCarsFetch");
  const buttonLoadCarFetch = document.getElementById("loadCarFetch");

  buttonLoadCarsFetch.addEventListener("click", event => {
    event.stopPropagation();
    cleanTable("cars-table");
    fetchAPI.getAllCars().then(result => {
      result.json().then(data => {
        addCarRows(data, "cars-table");
      });
    });
  });

  buttonLoadCarFetch.addEventListener("click", event => {
    event.stopPropagation();
    const carId = retrieveCarId();
    fetchAPI.getCarById(carId).then(result => {
      result.json().then(data => {
        populateEditCarForm(data);
      });
    });
  });

  // XMLHttpRequest
  const buttonLoadCarsXHR = document.getElementById("loadCarsXHR");
  const buttonLoadCarXHR = document.getElementById("loadCarXHR");

  buttonLoadCarsXHR.addEventListener("click", event => {
    event.stopPropagation();
    cleanTable("cars-table");
    xhrAPI.getAllCars().then(result => {
      addCarRows(result, "cars-table");
    });
  });

  buttonLoadCarXHR.addEventListener("click", event => {
    event.stopPropagation();
    const carId = retrieveCarId();
    xhrAPI.getCarById(carId).then(result => {
      populateEditCarForm(result);
    });
  });

});
