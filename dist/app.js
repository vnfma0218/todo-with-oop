import { TodoItems } from "./components/model/TodoItems.js";
import { myGoal } from "./components/myGoal.js";
const todoItems = TodoItems.getInstance();
class UserInput {
    constructor() {
        this.clearInput = () => {
            console.log("clear input~");
            this.inputEl.value = "";
        };
        this.submitHandler = (e) => {
            e.preventDefault();
            if (todoItems.myGoal) {
                todoItems.addTodo(this.inputEl.value);
            }
            else {
                todoItems.addMyGoal(this.inputEl.value);
            }
            console.log("submit~!");
            this.clearInput();
        };
        this.formEl = document.querySelector(".form");
        this.inputEl = document.querySelector(".user-input");
        this.configure();
    }
    configure() {
        this.formEl.addEventListener("submit", this.submitHandler);
    }
}
class TodoList {
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
        console.log("todoList contruector");
        this.todoList = [];
        this.hostEl = document.querySelector("main");
        todoItems.addListener((todos) => {
            this.todoList = todos;
            this.rendnerContent();
        });
    }
}
new UserInput();
new TodoList();
new myGoal();
//# sourceMappingURL=app.js.map