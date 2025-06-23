export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completed: string[];
  createdAt: string;
}
