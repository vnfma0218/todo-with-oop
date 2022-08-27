import { TodoItems } from "../model/TodoItems.js";
const todoItems = TodoItems.getInstance();
export class TodoList {
  hostEl: HTMLElement;
  todoList: any[];

  constructor() {
    this.todoList = [];
    this.hostEl = document.querySelector("main")! as HTMLElement;
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
