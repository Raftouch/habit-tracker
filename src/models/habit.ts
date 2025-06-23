import type { Payload } from "./payload";

export interface Habit extends Payload {
  id: string;
  completed: string[];
  createdAt: string;
}
