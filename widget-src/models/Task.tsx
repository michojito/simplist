/**
 * Class Model for the Task
 */
export class Task {
  static nextId = 1; // Compteur statique pour les IDs
  // Identifty
  UUID: number;
  content: string;
  checked: boolean;
  position: number;

  subtasks: Task[];

  constructor(content: string, position: number) {
    this.UUID = Date.now() + Task.nextId++;
    this.checked = false;
    this.content = content;
    this.position = position;

    this.subtasks = [];
  }
}
