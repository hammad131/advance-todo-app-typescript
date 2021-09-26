"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todo_1 = require("./todo");
class TodoCollection {
    constructor(userName, items = []) {
        this.userName = userName;
        this.items = items;
        this.nextId = 1;
        this.itemMap = new Map();
        items.forEach((item) => this.itemMap.set(item.taskId, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todo_1.Todo(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoByState(complete) {
        console.log([...this.itemMap.values()].filter(item => item.done === complete));
        return [...this.itemMap.values()].filter(item => item.done === complete);
    }
    markComplete(id, complete) {
        let todo = this.getTodoById(id);
        if (todo) {
            todo.done = complete;
        }
        console.log(todo);
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.done) {
                this.itemMap.delete(item.taskId);
            }
        });
    }
    taskDone(taskId) {
        let item = this.items.find((item) => item.taskId == taskId);
        item.done = true;
    }
    printAll() {
        this.itemMap.forEach((item) => {
            item.printTask();
        });
    }
}
exports.TodoCollection = TodoCollection;
