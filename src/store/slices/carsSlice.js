import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumtion:
      // action.payload === { name: "ab", cost: 123}
      const newCar = {
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      };
      state.data.push(newCar);
    },
    removeCar(state, action) {
      // Assumtion:
      // action.payload === the id of the car we want to remove
      const updatedCars = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updatedCars;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
