import { TodoItems } from "../model/TodoItems.js";
const todoItems = TodoItems.getInstance();
export class TodoList {
    constructor() {
        this.createTodoItemContent = (todo) => {
            const liEl = document.createElement("li");
            liEl.className = "todo-item";
            const pTag = document.createElement("p");
            pTag.textContent = todo;
            const btn = document.createElement("button");
            btn.className = "goal-input-btn";
            btn.textContent = "목표시간 설정하기";
            liEl.appendChild(pTag);
            liEl.appendChild(btn);
            return liEl;
        };
        this.rendnerContent = () => {
            const existingUlEl = document.querySelector(".todo-list");
            if (existingUlEl)
                this.hostEl.removeChild(existingUlEl);
            const ulEl = document.createElement("ul");
            ulEl.className = "todo-list";
            this.todoList.forEach((todo) => {
                const liEl = this.createTodoItemContent(todo);
                ulEl.appendChild(liEl);
            });
            this.hostEl.insertAdjacentElement("beforeend", ulEl);
        };
        this.todoList = [];
        this.hostEl = document.querySelector("main");
        todoItems.addListener((todos) => {
            this.todoList = todos;
            this.rendnerContent();
        });
    }
}
//# sourceMappingURL=todo-list.js.map