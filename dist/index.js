"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todo_1.Todo(1, "Buy Flowers"), new todo_1.Todo(2, "Get Shoes"),
    new todo_1.Todo(3, "Collect Tickets"), new todo_1.Todo(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("hammad", todos);
// collection.addTodo('pay bill')
// collection.getTodoByState(false)
// collection.printAll();
// collection.markComplete(1,true)
collection.removeComplete();
collection.printAll();
