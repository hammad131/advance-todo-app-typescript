import { Todo } from './todo';
import { TodoCollection } from './todoCollection';
import * as inquirer from 'inquirer';


let todos: Todo[] = [
    new Todo(1, 'Go For Walk'),
    new Todo(2, 'Have BreakFast'),
    new Todo(3, 'Do code'),
    new Todo(4, 'Go to Sleep', true)
]
let itemCollection : TodoCollection = new TodoCollection('muneeb', todos);

let showComplete = true

function displayTodoList(): void {
    console.log(`${itemCollection.userName}'s Todo List `
    + `(${ itemCollection.getTodoCount().incomplete } items to do)`);
    itemCollection.getTodoByStatus(showComplete).forEach(item => item.printTask());
   }



   enum Commands {
    Add = "Add New Task",
    Complete = "Complete Task",
    Toggle = "Show/Hide Completed",
    Purge = "Remove Completed Tasks",
    Quit = "Quit"
   }

   function promptAdd(){
    console.clear()
    inquirer.prompt({
        type: "input",
        name: "Add",
        message: "Enter Task"
    })
    .then(answers => {
        if (answers["Add"] !== ""){
        itemCollection.addTodo(answers["Add"])
        }
        promptUser()
    })
}



   function promptUser():void{
       console.clear();
       displayTodoList();
       inquirer.prompt({
           type: "list",
           name: "command",
           message: "Choose Option", 
           choices: Object.values(Commands)
       })
       .then(answers=>{
           switch (answers["command"]){

                case Commands.Toggle:
                    showComplete = !showComplete
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
       })
   }
promptUser();


// collection.addTodo('pay bill')
// collection.getTodoByState(false)
// collection.printAll();

// collection.markComplete(1,true)

// collection.removeComplete();
// collection.printAll();