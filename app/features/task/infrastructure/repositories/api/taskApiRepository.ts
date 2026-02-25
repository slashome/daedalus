import { mande } from 'mande'
import type { Task } from '../../../domain/task'

const api = mande('/api/tasks')

export const taskApiRepository = {
  async getAll(): Promise<Task[]> {
    return api.get<Task[]>('')
  },

  async getByUserId(userId: string): Promise<Task[]> {
    return api.get<Task[]>(`?userId=${userId}`)
  },

  async create(task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> {
    return api.post<Task>('', task)
  },

  async update(id: string, updates: Partial<Task>): Promise<Task> {
    return api.put<Task>(`/${id}`, updates)
  },

  async delete(id: string): Promise<void> {
    return api.delete(`/${id}`)
  },
}
