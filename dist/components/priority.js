import { TodoItems } from "../model/TodoItems.js";
const todoItems = TodoItems.getInstance();
export class Priority {
    constructor() {
        this.hostEl = document.querySelector("main");
        this.myGoal = "";
        this.templateElement = document.getElementById("priority");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.priorityEl = importedNode.firstElementChild;
        todoItems.addGoalListenr((mygoal) => {
            this.myGoal = mygoal;
            this.attach();
        });
    }
    attach() {
        this.hostEl.insertAdjacentElement("beforeend", this.priorityEl);
    }
}
//# sourceMappingURL=priority.js.map