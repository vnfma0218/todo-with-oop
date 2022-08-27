import { TodoItems } from "../model/TodoItems.js";

const todoItems = TodoItems.getInstance();

export class Priority {
  templateElement: HTMLTemplateElement;
  hostEl: HTMLElement;
  myGoal: string;
  priorityEl: HTMLDivElement;
  constructor() {
    this.hostEl = document.querySelector("main")! as HTMLElement;
    this.myGoal = "";
    this.templateElement = document.getElementById(
      "priority"
    )! as HTMLTemplateElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.priorityEl = importedNode.firstElementChild as HTMLDivElement;

    todoItems.addGoalListenr((mygoal: string) => {
      this.myGoal = mygoal;
      this.attach();
    });
  }
  private attach() {
    this.hostEl.insertAdjacentElement("beforeend", this.priorityEl);
  }
}
