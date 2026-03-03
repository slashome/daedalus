import { defineStore } from 'pinia'
import type { Task } from '@/features/task/domain/task'
import { useTaskService } from '@/features/task/application/useTaskService'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])
  const loading = ref(false)
  const service = useTaskService()

  async function fetchTasks(userId?: string) {
    loading.value = true
    try {
      tasks.value = await service.getTasks(userId)
    } finally {
      loading.value = false
    }
  }

  async function addTask(data: { title: string; description?: string; userId: string }) {
    const task = await service.createTask(data)
    tasks.value.push(task)
  }

  async function removeTask(id: string) {
    await service.deleteTask(id)
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  async function toggleTask(id: string) {
    const task = tasks.value.find(t => t.id === id)
    if (!task) return
    const updated = await service.toggleTask(id, !task.completed)
    const idx = tasks.value.findIndex(t => t.id === id)
    if (idx !== -1) tasks.value[idx] = updated
  }

  return { tasks, loading, fetchTasks, addTask, removeTask, toggleTask }
})
