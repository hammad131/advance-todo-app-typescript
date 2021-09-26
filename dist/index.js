"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoCollection_1 = require("./todoCollection");
let icollection = new todoCollection_1.TodoCollection();
icollection.addTodo("pay bill");
icollection.taskDone(1);
icollection.printAll();
