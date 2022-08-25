"use strict";
class TodoItems {
    constructor() {
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
        this.listenerFn(this.todos.slice());
    }
    addListener(fn) {
        this.listenerFn = fn;
    }
    static getInstance() {
        return this.instance || (this.instance = new this());
    }
}
const todoItems = TodoItems.getInstance();
class UserInput {
    constructor() {
        this.clearInput = () => {
            this.inputEl.value = "";
        };
        this.submitHandler = (e) => {
            e.preventDefault();
            todoItems.addTodo(this.inputEl.value);
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
        this.hostEl = document.querySelector(".todo-app");
        todoItems.addListener((todos) => {
            this.todoList = todos;
            this.rendnerContent();
        });
    }
}
new UserInput();
new TodoList();
//# sourceMappingURL=app.js.map