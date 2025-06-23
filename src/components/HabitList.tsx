import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function HabitList() {
  const habits = useSelector((state: RootState) => state.habit.habits);

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Habits</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="border border-gray-300 rounded-md p-4 shadow-sm flex flex-col h-36"
          >
            <div>
              <p className="text-lg font-semibold mb-1 capitalize">
                {habit.name}
              </p>
              <p className="text-sm text-gray-500 mb-4 capitalize">
                Frequency: {habit.frequency}
              </p>
            </div>

            <div className="mt-auto space-x-2">
              <button
                className={`px-3 py-1 rounded text-white text-sm transition-colors cursor-pointer ${
                  habit.completed.includes(today)
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {habit.completed.includes(today)
                  ? "Completed"
                  : "Mark Complete"}
              </button>

              <button className="px-3 py-1 rounded text-sm bg-red-500 hover:bg-red-600 text-white transition-colors cursor-pointer">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
