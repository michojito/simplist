/**
 * Class Model for the Task
 */
class Task {

    // Identifty
    UUID : number
    content: string
    checked: boolean
    
    // DataLink
    parent?: Task
    children?: Task[]

    constructor(content: string) {
        this.UUID = Date.now()
        this.checked = false
        this.content = content
    }

}