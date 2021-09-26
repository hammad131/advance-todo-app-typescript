import {Todo} from './todo'
import { TodoCollection } from './todoCollection'

import * as inquirer from 'inquirer';

let todos: Todo[] = [
    new Todo(1, "Buy Flowers"), new Todo(2, "Get Shoes"),
    new Todo(3, "Collect Tickets"), new Todo(4, "Call Joe", true)];

let collection: TodoCollection = new TodoCollection("hammad",todos)

// collection.addTodo('pay bill')
// collection.getTodoByState(false)
// collection.printAll();

// collection.markComplete(1,true)

collection.removeComplete();
collection.printAll();