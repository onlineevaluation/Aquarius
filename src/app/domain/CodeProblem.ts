export class CodeProblem {
  id: number;
  title: string;
  memory: string;
  time: string;


  constructor(id: number, title: string, memory: string, time: string) {
    this.id = id;
    this.title = title;
    this.memory = memory;
    this.time = time;
  }
}
