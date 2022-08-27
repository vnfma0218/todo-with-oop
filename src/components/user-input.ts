import { TodoItems } from "../model/TodoItems.js";
const todoItems = TodoItems.getInstance();

export class UserInput {
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
    if (todoItems.myGoal) {
      todoItems.addTodo(this.inputEl.value);
    } else {
      todoItems.addMyGoal(this.inputEl.value);
    }
    this.clearInput();
  };

  private configure() {
    this.formEl.addEventListener("submit", this.submitHandler);
  }
}
