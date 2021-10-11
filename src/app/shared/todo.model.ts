export class Todo {
    constructor(public key : Number , public text : string , public done : boolean) {}

    toggle() {
        this.done = ! this.done;
    }
}
