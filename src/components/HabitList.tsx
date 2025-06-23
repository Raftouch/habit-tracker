import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function HabitList() {
  const habits = useSelector((state: RootState) => state.habit.habits);

  return (
    <div>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <p>{habit.name}</p>
            <p>{habit.frequency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
