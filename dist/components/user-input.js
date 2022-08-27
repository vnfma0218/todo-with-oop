import { TodoItems } from "../model/TodoItems.js";
const todoItems = TodoItems.getInstance();
export class UserInput {
    constructor() {
        this.clearInput = () => {
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
//# sourceMappingURL=user-input.js.map