"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todo_1 = require("./todo");
class TodoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new todo_1.Todo(this.nextId, task);
        this.nextId++;
        this.items.push(item);
    }
    taskDone(taskId) {
        let item = this.items.find((item) => item.taskId == taskId);
        item.done = true;
    }
    printAll() {
        this.items.forEach((item) => {
            item.printTask();
        });
    }
}
exports.TodoCollection = TodoCollection;
