export class Task {
    id: number
    check: boolean
    content: string
    open: boolean
    parent?: Task
    children?: Task[]

    constructor(check:boolean, content:string, parent?: Task, subtask?: Task[]) {
        this.id = new Date().getMilliseconds()
        this.open = false
        this.check = check || false
        this.content = content
        this.parent = parent
        this.children = subtask
    }
}