export class MultipleChoice {


  id: number;
  title: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  choiceD: string;


  constructor(id: number, title: string, choiceA: string, choiceB: string, choiceC: string, choiceD: string) {
    this.id = id;
    this.title = title;
    this.choiceA = choiceA;
    this.choiceB = choiceB;
    this.choiceC = choiceC;
    this.choiceD = choiceD;
  }

}
