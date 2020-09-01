import { AppState, Priority } from './type';
import { waitForInput } from './input';
import { getIsValidEnumValue } from './util';

export abstract class Command {
  constructor(public key: string, private desc: string) {}
  toString() {
    return `${this.key} : ${this.desc}`;
  }
  abstract async run(state: AppState): Promise<void>;
}

export class CommandPrintTodos extends Command {
  constructor() {
    super('p', '모든 할 일 출력하기');
  }
  async run(state: AppState): Promise<void> {
    for (const todo of state.todos) {
      const text = todo.toString();
      console.log(text);
    }
    await waitForInput('press any key: ');
  }
}

export class CommandNewTodo extends Command {
  constructor() {
    super('n', '할 일 추가하기');
  }
  async run(): Promise<void> {
    const title = await waitForInput('title : ');
    const priorityStr = await waitForInput('priority : ');
    const priority = Number(priorityStr);
    if (title && CommandNewTodo.getIsPriority(priority)) {
    }
  }

  static getIsPriority(priority: number): priority is Priority {
    return getIsValidEnumValue(Priority, priority);
  }
}
