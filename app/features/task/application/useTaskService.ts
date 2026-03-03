import { taskFakeRepository } from '../infrastructure/repositories/fake/taskFakeRepository'
import { taskApiRepository } from '../infrastructure/repositories/upstream/taskApiRepository'
import type { Task } from '../domain/task'
import type { TaskRepository, TaskUpdateInput } from '../domain/taskRepository'
import { useRepositoryMode } from '@/shared/repositories/repositoryMode'

export function useTaskService(repository?: TaskRepository) {
  const repo =
    repository ?? (useRepositoryMode() === 'api' ? taskApiRepository : taskFakeRepository)

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
