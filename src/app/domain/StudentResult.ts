export class StudentResult {
  pageId: number;
  studentId: number;
  answer: Array<Ans> = [];
  doTime: number = 0;
}

export class Ans {
  id: number;
  ans: string;
}
