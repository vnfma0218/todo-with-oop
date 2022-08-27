import { myGoal } from "./components/my-goal.js";
import { UserInput } from "./components/user-input.js";
import { TodoList } from "./components/todo-list.js";
import { Priority } from "./components/priority.js";

new myGoal();
new TodoList();
new Priority();
new UserInput();
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
