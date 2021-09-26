import {Todo} from './todo'

import { TodoCollection } from './todoCollection'

let icollection:TodoCollection = new TodoCollection();

icollection.addTodo("pay bill")
icollection.taskDone(1);
icollection.printAll();