/**
 * Class Model for the Task
 */
export class Task {
  // Identifty
  UUID: number;
  content: string;
  checked: boolean;
  position: number;

  subtasks: Task[];

  constructor(content: string, position: number) {
    this.UUID = Date.now();
    this.checked = false;
    this.content = content;
    this.position = position;

    this.subtasks = [];
  }
}
