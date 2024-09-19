/**
 * Class Model for the Task
 */
class Task {

    // Identifty
    UUID : number
    content: string
    checked: boolean
    
    subtasks: Task[];

    constructor(content: string) {
        this.UUID = Date.now()
        this.checked = false
        this.content = content
        this.subtasks = [];
    }

}