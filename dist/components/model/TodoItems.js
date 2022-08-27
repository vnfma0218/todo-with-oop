export class TodoItems {
    constructor() {
        this.todos = [];
        this.myGoal = "";
    }
    addTodo(todo) {
        this.todos.push(todo);
        this.listenerFn(this.todos.slice());
    }
    addMyGoal(goal) {
        this.myGoal = goal;
        this.goalListnerFn(this.myGoal);
    }
    addListener(fn) {
        this.listenerFn = fn;
    }
    addGoalListenr(fn) {
        this.goalListnerFn = fn;
    }
    static getInstance() {
        return this.instance || (this.instance = new this());
    }
}
//# sourceMappingURL=TodoItems.js.map