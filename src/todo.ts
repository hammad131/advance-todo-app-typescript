export class Todo {
    public constructor (public taskId: number, public task:String, public done:boolean=  false){
        //compiler will auto generate
    }
    public printTask():void{
        console.log(`id:${this.taskId}, \ntask:${this.task}, \ncompleted:${this.done}`)
    }
}