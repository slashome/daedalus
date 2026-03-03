import type { Task } from '../../../domain/task'
import type { TaskRepository, TaskCreateInput, TaskUpdateInput } from '../../../domain/taskRepository'

const fakeTasks: Task[] = [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread',
    completed: false,
    userId: '1',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    title: 'Read a book',
    completed: true,
    userId: '1',
    createdAt: new Date('2024-01-02'),
  },
  {
    id: '3',
    title: 'Exercise',
    description: '30 minutes of cardio',
    completed: false,
    userId: '2',
    createdAt: new Date('2024-01-03'),
  },
]

export const taskFakeRepository = {
  async getAll(): Promise<Task[]> {
    return Promise.resolve([...fakeTasks])
  },

  async getByUserId(userId: string): Promise<Task[]> {
    return Promise.resolve(fakeTasks.filter(t => t.userId === userId))
  },

  async create(task: TaskCreateInput): Promise<Task> {
    const newTask: Task = {
      ...task,
      id: String(Date.now()),
      createdAt: new Date(),
    }
    fakeTasks.push(newTask)
    return Promise.resolve({ ...newTask })
  },

  async update(id: string, updates: TaskUpdateInput): Promise<Task> {
    const idx = fakeTasks.findIndex(t => t.id === id)
    if (idx === -1) throw new Error('Task not found')
    fakeTasks[idx] = { ...fakeTasks[idx], ...updates }
    return Promise.resolve({ ...fakeTasks[idx] })
  },

  async delete(id: string): Promise<void> {
    const idx = fakeTasks.findIndex(t => t.id === id)
    if (idx !== -1) fakeTasks.splice(idx, 1)
    return Promise.resolve()
  },
} satisfies TaskRepository
