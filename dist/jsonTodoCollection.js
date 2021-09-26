"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const todo_1 = require("./todo");
const todoCollection_1 = require("./todoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends todoCollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.taskId, new todo_1.Todo(item.taskId, item.task, item.done)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.taskId, item));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
