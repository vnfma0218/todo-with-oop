import { TodoItems } from "./model/TodoItems.js";
const todoItems = TodoItems.getInstance();
export class myGoal {
    constructor() {
        this.h3El = undefined;
        this.hostEl = document.querySelector("main");
        this.myGoal = "";
        this.templateElement = document.getElementById("my-goal-template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.goalEl = importedNode.firstElementChild;
        this.goalEl.className = "my-goal";
        this.attach();
        todoItems.addGoalListenr((mygoal) => {
            this.myGoal = mygoal;
            this.attach();
        });
    }
    attach() {
        console.log(`goal ${this.myGoal}`);
        if (todoItems.myGoal) {
            if (this.h3El)
                this.hostEl.removeChild(this.h3El);
            const goalTextTag = this.goalEl.querySelector("p");
            goalTextTag.textContent = `${this.myGoal}`;
            this.hostEl.insertAdjacentElement("afterbegin", this.goalEl);
        }
        else {
            const h3El = document.createElement("h3");
            h3El.className = "goal-question";
            h3El.textContent = "오늘의 목표는 무엇입니까?";
            this.h3El = h3El;
            this.hostEl.insertAdjacentElement("afterbegin", h3El);
        }
    }
}
//# sourceMappingURL=myGoal.js.map