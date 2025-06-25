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
    toggleHabit: (
      state,
      action: PayloadAction<{ id: string; date: string }>
    ) => {
      const habit = state.habits.find(
        (habit) => habit.id === action.payload.id
      );
      if (habit) {
        const index = habit.completed.indexOf(action.payload.date);
        if (index > -1) {
          habit.completed.splice(index, 1);
        } else {
          habit.completed.push(action.payload.date);
        }
      }
    },
    removeHabit: (state, action: PayloadAction<{ id: string }>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload.id
      );
    },
  },
});

export const { addHabit, toggleHabit, removeHabit } = habitSlice.actions;

export default habitSlice.reducer;
