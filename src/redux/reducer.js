import { createReducer } from "@reduxjs/toolkit";
import * as Types from "./constants";

const initialState = [];

export const toursReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Types.ADD_CONTACT, (state, action) => {
      state.push(action.payload);
    })
    .addCase(Types.DELETE_CONTACT, (state, action) => {
      state.filter((tour) => tour.id !== action.payload);
    });
});
