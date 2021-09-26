export class Todo {
    public constructor (public taskId: number, public task:String, public done:boolean=  false){
        //compiler will auto generate
    }
    public printTask():void{
        console.log(`${this.taskId}\t${this.task} ${this.done
            ? "\t(complete)": ""}`);
    }
}