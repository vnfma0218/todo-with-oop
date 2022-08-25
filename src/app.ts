class TodoItems {
  todos: string[];
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
    todoItems.addTodo(this.inputEl.value);
    this.clearInput();
  };

  private configure() {
    this.formEl.addEventListener("submit", this.submitHandler);
  }
}

class TodoList {
  hostEl: HTMLElement;

  todoList: any[];

  constructor() {
    console.log("todoList contruector");
    this.todoList = [];
    this.hostEl = document.querySelector(".todo-app")! as HTMLElement;

    todoItems.addListener((todos: any[]) => {
      this.todoList = todos;
      this.rendnerContent();
    });
  }

  private createTodoItemContent = (todo: string) => {
    const liEl = document.createElement("li") as HTMLLIElement;
    liEl.className = "todo-item";
    const pTag = document.createElement("p") as HTMLParagraphElement;
    pTag.textContent = todo;
    const btn = document.createElement("button") as HTMLButtonElement;
    btn.className = "goal-input-btn";
    btn.textContent = "목표시간 설정하기";
    liEl.appendChild(pTag);
    liEl.appendChild(btn);
    return liEl;
  };

  private rendnerContent = () => {
    const existingUlEl = document.querySelector(".todo-list");
    if (existingUlEl) this.hostEl.removeChild(existingUlEl);
    const ulEl = document.createElement("ul") as HTMLUListElement;
    ulEl.className = "todo-list";
    this.todoList.forEach((todo) => {
      const liEl = this.createTodoItemContent(todo);
      ulEl.appendChild(liEl);
    });
    this.hostEl.insertAdjacentElement("beforeend", ulEl);
  };
}

new UserInput();
new TodoList();

/* const selecEl = document.querySelector("#goal-hours")! as HTMLSelectElement;

const getHourOptions = () => {
  const arr = Array.from({ length: 25 }, () => 0);
  const options = arr.map((_, index) => {
    if (index === 0) {
      return ` <option value="">--Please choose goal hours--</option>`;
    } else {
      return `<option value=${index}>${index}</option>`;
    }
  });
  return options;
};
selecEl.innerHTML = getHourOptions().join("");

getHourOptions(); */
