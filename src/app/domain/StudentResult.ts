export class StudentResult {
  pageId: number;
  studentId: number;
  answer: Array<Ans> = [];
}

export class Ans {
  id: number;
  ans: string;
}
