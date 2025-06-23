import { useState } from "react";

export default function AddHabitForm() {
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFrequency(e.target.value as "daily" | "weekly");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="habit name"
      />
      <select value={frequency} onChange={handleFrequencyChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button type="submit">Add habit</button>
    </form>
  );
}
