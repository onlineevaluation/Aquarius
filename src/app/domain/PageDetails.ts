export class PageDetails {
  id: number;
  score: number;
  pageId: number;
  pageTitle: string;
  course: string;
  doTime: string;

  select: Array<StudentAnswerSelect> = [];
  blank: Array<StudentAnswer> = [];
  ans: Array<StudentAnswer> = [];
}

class StudentAnswer {
  id: number;
  answer: string;
  score: number;
  standarAnswer: string;
  title: string;
}

class StudentAnswerSelect extends StudentAnswer {
  selecionA: string;
  selecionB: string;
  selecionC: string;
  selecionD: string;
}
