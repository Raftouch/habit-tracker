import { createSlice } from "@reduxjs/toolkit";
import type { Habit } from "../models/habit";

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = {
  habits: [],
};

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {},
});

export const {} = habitSlice.actions;

export default habitSlice.reducer;
