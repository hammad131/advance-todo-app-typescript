import {Todo} from './todo'


export class TodoCollection{

    private nextId:number=1

    public constructor(public items:Todo[] = []){

    }

    public addTodo(task:string):void{

        let item:Todo = new Todo(this.nextId, task);
        this.nextId++;
        this.items.push(item)
    }

    public taskDone(taskId:number):void{
        let item:Todo = this.items.find((item)=> item.taskId == taskId);
        item.done = true
    }

    public printAll():void{
        this.items.forEach((item:Todo)=>{
            item.printTask();
        })
    }
}