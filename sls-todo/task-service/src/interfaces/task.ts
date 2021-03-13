import { StatusTask } from './status';
export interface Task {
  id: string;
  statusTask: StatusTask;
  createdAt: string;
  title: string;
  isImportant: boolean;
  isMyDay: boolean;
}
