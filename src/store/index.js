import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };
