// 사용자가 제출한 input text를 저장한다
// 저장한 text 목록을 뿌려준다
// 리스너를 등록한다
// 리스너를 등록하기

class TodoItems {
  todos: string[];
  //   listenerFn: any[];
  listenerFn: any;
  private static instance: TodoItems;

  private constructor() {
    this.todos = [];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
    this.listenerFn(this.todos.slice());
  }

  addListener(fn: any) {
    this.listenerFn = fn;
  }

  public static getInstance() {
    return this.instance || (this.instance = new this());
  }
}

const todoItems = TodoItems.getInstance();

class UserInput {
  formEl: HTMLFormElement;
  inputEl: HTMLInputElement;

  constructor() {
    this.formEl = document.querySelector(".form")! as HTMLFormElement;
    this.inputEl = document.querySelector(".user-input")! as HTMLInputElement;
    this.configure();
  }

  private clearInput = () => {
    this.inputEl.value = "";
  };

  private submitHandler = (e: Event) => {
    e.preventDefault();
    console.log(this.inputEl.value);
    todoItems.addTodo(this.inputEl.value);
    this.clearInput();
  };

  private configure() {
    this.formEl.addEventListener("submit", this.submitHandler);
  }
}

class TodoList {
  hostEl: HTMLBodyElement;
  /*   ulEl: HTMLUListElement;
  liEl: HTMLLIElement; */
  todoList: any;

  constructor() {
    this.hostEl = document.querySelector("body")! as HTMLBodyElement;
    // this.ulEl = document.querySelector(".todo-list")! as HTMLUListElement;
    // this.liEl = document.querySelector(".todo-item")! as HTMLLIElement;

    todoItems.addListener((todos: any) => {
      this.todoList = todos;
      this.rendnerContent();
    });
  }

  private rendnerContent = () => {
    const ulEl = document.createElement("ul") as HTMLUListElement;
    ulEl.className = "todo-list";
    console.log(this.todoList);
  };
}

new UserInput();
new TodoList();
