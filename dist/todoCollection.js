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
    getTodoByStatus(complete) {
        return [...this.itemMap.values()].filter((item) => item.done === complete);
    }
    markComplete(id, complete) {
        let todo = this.getTodoById(id);
        if (todo) {
            todo.done = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.done) {
                this.itemMap.delete(item.taskId);
            }
        });
    }
    getTodoCount() {
        console.log({
            total: this.itemMap.size,
            incomplete: this.getTodoByStatus(false).length,
            complete: this.getTodoByStatus(true).length,
        });
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoByStatus(false).length,
            complete: this.getTodoByStatus(true).length,
        };
    }
    printAll() {
        this.itemMap.forEach((item) => {
            item.printTask();
        });
    }
}
exports.TodoCollection = TodoCollection;
