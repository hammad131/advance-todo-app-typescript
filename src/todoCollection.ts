import {Todo} from './todo'


export class TodoCollection{

    
    private nextId: number = 1;
    private itemMap = new Map<number, Todo>();

    public constructor(public userName:string ,  public items:Todo[] = []){
        items.forEach((item)=>this.itemMap.set(item.taskId,item))

    }

    addTodo(task:string):number{
        while (this.getTodoById(this.nextId)){
            this.nextId++
        }
        this.itemMap.set(this.nextId,new Todo(this.nextId,task))
        return this.nextId
    }

    getTodoById(id:number):Todo{
        return this.itemMap.get(id)
    }

    getTodoByState(complete:boolean):Todo[]{
        console.log([...this.itemMap.values()].filter(item=> item.done === complete))
        return [...this.itemMap.values()].filter(item=> item.done === complete)
    }

    markComplete(id:number, complete:boolean):void{
        let todo = this.getTodoById(id);
        if (todo){
            todo.done = complete
        }
        console.log(todo)
    }
    
    removeComplete(){
        this.itemMap.forEach(item =>{
            if(item.done){
                this.itemMap.delete(item.taskId)
            }
        })
    }

        

    public taskDone(taskId:number):void{
        let item:Todo = this.items.find((item)=> item.taskId == taskId);
        item.done = true
    }

    public printAll():void{
        this.itemMap.forEach((item:Todo)=>{
            item.printTask();
        })
    }
}