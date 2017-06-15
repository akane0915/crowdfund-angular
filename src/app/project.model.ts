export class Project {
  status: number = 0;
  constructor(public title: string, public description: string, public creator: string, public goal: number, public category: string, public deadline: string) {}
}
