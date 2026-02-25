import type { Task } from './task'

export type TaskCreateInput = Omit<Task, 'id' | 'createdAt'>
export type TaskUpdateInput = Partial<Omit<Task, 'id' | 'createdAt'>>

export interface TaskRepository {
  getAll(): Promise<Task[]>
  getByUserId(userId: string): Promise<Task[]>
  create(task: TaskCreateInput): Promise<Task>
  update(id: string, updates: TaskUpdateInput): Promise<Task>
  delete(id: string): Promise<void>
}
