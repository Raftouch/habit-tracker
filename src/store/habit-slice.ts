import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Habit } from "../models/habit";
import type { Payload } from "../models/payload";

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = {
  habits: [],
};

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Payload>) => {
      const habit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completed: [],
        createdAt: new Date().toISOString(),
      };

      state.habits.push(habit);
    },
  },
});

export const {} = habitSlice.actions;

export default habitSlice.reducer;
