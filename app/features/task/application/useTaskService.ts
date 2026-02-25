import { taskFakeRepository } from '../infrastructure/repositories/fake/taskFakeRepository'
import type { Task } from '../domain/task'
import type { TaskRepository, TaskUpdateInput } from '../domain/taskRepository'

export function useTaskService(repository: TaskRepository = taskFakeRepository) {
  const repo = repository

  async function getTasks(userId?: string): Promise<Task[]> {
    if (userId) return repo.getByUserId(userId)
    return repo.getAll()
  }

  async function createTask(data: { title: string; description?: string; userId: string }): Promise<Task> {
    return repo.create({ ...data, completed: false })
  }

  async function updateTask(id: string, updates: TaskUpdateInput): Promise<Task> {
    return repo.update(id, updates)
  }

  async function deleteTask(id: string): Promise<void> {
    return repo.delete(id)
  }

  async function toggleTask(id: string, completed: boolean): Promise<Task> {
    return repo.update(id, { completed })
  }

  return { getTasks, createTask, updateTask, deleteTask, toggleTask }
}
