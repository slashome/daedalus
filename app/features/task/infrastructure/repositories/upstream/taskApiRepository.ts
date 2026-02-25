import { mande } from 'mande'
import type { Task } from '../../../domain/task'
import type { TaskRepository, TaskCreateInput, TaskUpdateInput } from '../../../domain/taskRepository'

const api = mande('/api/tasks')

export const taskApiRepository = {
  async getAll(): Promise<Task[]> {
    return api.get<Task[]>('')
  },

  async getByUserId(userId: string): Promise<Task[]> {
    return api.get<Task[]>(`?userId=${userId}`)
  },

  async create(task: TaskCreateInput): Promise<Task> {
    return api.post<Task>('', task)
  },

  async update(id: string, updates: TaskUpdateInput): Promise<Task> {
    return api.put<Task>(`/${id}`, updates)
  },

  async delete(id: string): Promise<void> {
    return api.delete(`/${id}`)
  },
} satisfies TaskRepository
