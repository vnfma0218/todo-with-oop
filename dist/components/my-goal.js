import { TodoItems } from "../model/TodoItems.js";
const todoItems = TodoItems.getInstance();
export class myGoal {
    constructor() {
        this.h3El = undefined;
        this.hostEl = document.querySelector("main");
        this.myGoal = "";
        this.templateElement = document.getElementById("my-goal-template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.goalEl = importedNode.firstElementChild;
        this.attach();
        todoItems.addGoalListenr((mygoal) => {
            this.myGoal = mygoal;
            this.attach();
        });
    }
    attach() {
        console.log(todoItems.myGoal);
        if (todoItems.myGoal) {
            const goalForm = this.goalEl.querySelector("form");
            this.goalEl.removeChild(goalForm);
            if (this.h3El)
                this.hostEl.removeChild(this.h3El);
            const goalTextTag = this.goalEl.querySelector("p");
            const title = this.goalEl.querySelector("h3");
            goalTextTag.textContent = `${this.myGoal}`;
            title.textContent = "오늘 당신의 목표는..";
            this.hostEl.insertAdjacentElement("afterbegin", this.goalEl);
        }
        else {
            this.hostEl.insertAdjacentElement("afterbegin", this.goalEl);
        }
    }
}
//# sourceMappingURL=my-goal.js.map