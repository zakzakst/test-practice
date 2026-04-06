export class CreateTodoDto {
  // TODO: classの利用経験が少ないため、この記述が正しいのか自信がない。調べる
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean) {
    this.title = title;
    this.completed = completed;
  }
}
