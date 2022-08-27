import { TodoItems } from "./model/TodoItems.js";
const todoItems = TodoItems.getInstance();

export class myGoal {
  hostEl: HTMLElement;
  templateElement: HTMLTemplateElement;
  goalEl: HTMLDivElement;
  myGoal: string;

  h3El: HTMLElement | undefined;

  constructor() {
    this.h3El = undefined;
    this.hostEl = document.querySelector("main")! as HTMLElement;
    this.myGoal = "";
    this.templateElement = document.getElementById(
      "my-goal-template"
    )! as HTMLTemplateElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.goalEl = importedNode.firstElementChild as HTMLDivElement;
    this.goalEl.className = "my-goal";
    this.attach();
    todoItems.addGoalListenr((mygoal: string) => {
      this.myGoal = mygoal;
      this.attach();
    });
  }
  private attach() {
    console.log(`goal ${this.myGoal}`);
    if (todoItems.myGoal) {
      if (this.h3El) this.hostEl.removeChild(this.h3El);
      const goalTextTag = this.goalEl.querySelector(
        "p"
      )! as HTMLParagraphElement;

      goalTextTag.textContent = `${this.myGoal}`;
      this.hostEl.insertAdjacentElement("afterbegin", this.goalEl);
    } else {
      const h3El = document.createElement("h3");
      h3El.className = "goal-question";
      h3El.textContent = "오늘의 목표는 무엇입니까?";
      this.h3El = h3El;
      this.hostEl.insertAdjacentElement("afterbegin", h3El);
    }
  }
}
