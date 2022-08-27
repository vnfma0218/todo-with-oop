export class TodoItems {
  todos: string[];
  myGoal: string;
  listenerFn: any;
  goalListnerFn: any[];
  private static instance: TodoItems;

  private constructor() {
    this.todos = [];
    this.goalListnerFn = [];
    this.myGoal = "";
  }

  addTodo(todo: string) {
    this.todos.push(todo);
    this.listenerFn(this.todos.slice());
  }

  addMyGoal(goal: string) {
    this.myGoal = goal;
    this.goalListnerFn.forEach((fn) => {
      fn(this.myGoal);
    });

    // this.goalListnerFn(this.myGoal);
  }

  addListener(fn: any) {
    this.listenerFn = fn;
  }
  addGoalListenr(fn: any) {
    console.log("push listener");
    this.goalListnerFn.push(fn);
  }

  public static getInstance() {
    return this.instance || (this.instance = new this());
  }
}
