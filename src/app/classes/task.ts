export class Task {
    id: number = 0;
    title: string = '';
    description: string = '';
    status: string = '';
    dueDate: string = '';

    constructor(id: number, title: string, description: string, status: string, dueDate: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;
    }
}

export class TaskNoId {
    title: string = '';
    description: string = '';
    status: string = '';
    dueDate: string = '';
    userid: number = 0;

    constructor(title: string, description: string, status: string, dueDate: string, userid: number) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;
        this.userid = userid;
    }
}
