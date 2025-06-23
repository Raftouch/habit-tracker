import AddHabitForm from "./components/Form";
import HabitList from "./components/HabitList";

function App() {
  return (
    <div className="h-screen flex flex-col items-center p-5">
      <h1 className="font-bold text-2xl mb-10">Habit Tracker</h1>
      <AddHabitForm />
      <HabitList />
    </div>
  );
}

export default App;
