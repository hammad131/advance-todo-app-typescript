import {Todo} from './todo'

type TodoCounts = {
    total: number
    incomplete: number,
    complete: number,
}

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

    getTodoByStatus(complete:boolean):Todo[]{
        return [...this.itemMap.values()].filter((item)=> item.done===complete)
    }

    markComplete(id:number, complete:boolean):void{
        let todo = this.getTodoById(id);
        if (todo){
            todo.done = complete
        }
        
    }

    removeComplete(){
        this.itemMap.forEach(item =>{
            if(item.done){
                this.itemMap.delete(item.taskId)
            }
        })
    }

    getTodoCount():TodoCounts{
        console.log({
            total: this.itemMap.size,
            incomplete: this.getTodoByStatus(false).length,
            complete: this.getTodoByStatus(true).length,
        })
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoByStatus(false).length,
            complete: this.getTodoByStatus(true).length,
        }
    }

        

    

    public printAll():void{
        this.itemMap.forEach((item:Todo)=>{
            item.printTask();
        })
    }
}