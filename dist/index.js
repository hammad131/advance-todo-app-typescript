"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todo_1.Todo(1, 'Go For Walk'),
    new todo_1.Todo(2, 'Have BreakFast'),
    new todo_1.Todo(3, 'Do code'),
    new todo_1.Todo(4, 'Go to Sleep', true)
];
let itemCollection = new todoCollection_1.TodoCollection('muneeb', todos);
let showComplete = true;
function displayTodoList() {
    console.log(`${itemCollection.userName}'s Todo List `
        + `(${itemCollection.getTodoCount().incomplete} items to do)`);
    itemCollection.getTodoByStatus(showComplete).forEach(item => item.printTask());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "Add",
        message: "Enter Task"
    })
        .then(answers => {
        if (answers["Add"] !== "") {
            itemCollection.addTodo(answers["Add"]);
        }
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose Option",
        choices: Object.values(Commands)
    })
        .then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showComplete = !showComplete;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Purge:
                itemCollection.removeComplete();
                promptUser();
                break;
            //    case Commands.Purge:
        }
    });
}
promptUser();
// collection.addTodo('pay bill')
// collection.getTodoByState(false)
// collection.printAll();
// collection.markComplete(1,true)
// collection.removeComplete();
// collection.printAll();
