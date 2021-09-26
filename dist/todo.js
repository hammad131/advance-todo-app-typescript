"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(taskId, task, done = false) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
        //compiler will auto generate
    }
    printTask() {
        console.log(`id:${this.taskId}, \ntask:${this.task}, \ncompleted:${this.done}`);
    }
}
exports.Todo = Todo;
