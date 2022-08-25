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
            console.log(this.inputEl.value);
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
        this.rendnerContent = () => {
            const ulEl = document.createElement("ul");
            ulEl.className = "todo-list";
            console.log(this.todoList);
        };
        this.hostEl = document.querySelector("body");
        todoItems.addListener((todos) => {
            this.todoList = todos;
            this.rendnerContent();
        });
    }
}
new UserInput();
new TodoList();
//# sourceMappingURL=app.js.map