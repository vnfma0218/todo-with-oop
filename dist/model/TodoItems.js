export class TodoItems {
    constructor() {
        this.todos = [];
        this.goalListnerFn = [];
        this.myGoal = "";
    }
    addTodo(todo) {
        this.todos.push(todo);
        this.listenerFn(this.todos.slice());
    }
    addMyGoal(goal) {
        this.myGoal = goal;
        this.goalListnerFn.forEach((fn) => {
            fn(this.myGoal);
        });
    }
    addListener(fn) {
        this.listenerFn = fn;
    }
    addGoalListenr(fn) {
        console.log("push listener");
        this.goalListnerFn.push(fn);
    }
    static getInstance() {
        return this.instance || (this.instance = new this());
    }
}
//# sourceMappingURL=TodoItems.js.map