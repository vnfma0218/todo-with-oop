import { TodoItems } from "../model/TodoItems.js";
const todoItems = TodoItems.getInstance();

export class myGoal {
  templateElement: HTMLTemplateElement;
  hostEl: HTMLElement;
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
    this.attach();

    todoItems.addGoalListenr((mygoal: string) => {
      this.myGoal = mygoal;
      this.attach();
    });
  }

  private attach() {
    console.log(todoItems.myGoal);
    if (todoItems.myGoal) {
      const goalForm = this.goalEl.querySelector("form")! as HTMLFormElement;
      this.goalEl.removeChild(goalForm);
      if (this.h3El) this.hostEl.removeChild(this.h3El);
      const goalTextTag = this.goalEl.querySelector(
        "p"
      )! as HTMLParagraphElement;
      const title = this.goalEl.querySelector("h3")! as HTMLHeadingElement;
      goalTextTag.textContent = `${this.myGoal}`;
      title.textContent = "오늘 당신의 목표는..";
      this.hostEl.insertAdjacentElement("afterbegin", this.goalEl);
    } else {
      this.hostEl.insertAdjacentElement("afterbegin", this.goalEl);
    }
  }
}
