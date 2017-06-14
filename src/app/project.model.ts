export class Project {
  status: number = 0;
  constructor(public title: string, public description: string, public creator: string, public goal: number, public categories: any[], public deadline: string) {}
}
