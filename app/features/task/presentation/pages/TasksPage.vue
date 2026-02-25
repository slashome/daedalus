<template>
  <div class="tasks-page">
    <h1>{{ $t('tasks.title') }}</h1>
    <UserSelector />
    <TaskForm @submit="onAddTask" />
    <div v-if="taskStore.loading" class="loading">Loading...</div>
    <TaskList
      v-else
      :tasks="taskStore.tasks"
      @toggle="taskStore.toggleTask"
      @delete="taskStore.removeTask"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/shared/stores/useUserStore'
import { useTaskStore } from '~/shared/stores/useTaskStore'
import UserSelector from '~/features/user/presentation/components/UserSelector.vue'
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'

const userStore = useUserStore()
const taskStore = useTaskStore()
const { currentUser } = storeToRefs(userStore)

onMounted(async () => {
  await userStore.fetchUsers()
  await taskStore.fetchTasks(currentUser.value?.id)
})

watch(currentUser, async (user) => {
  if (user) await taskStore.fetchTasks(user.id)
})

async function onAddTask(title: string) {
  if (!currentUser.value) return
  await taskStore.addTask({ title, userId: currentUser.value.id })
}
</script>

<style scoped>
.tasks-page h1 { font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: #111827; }
.loading { text-align: center; padding: 2rem; color: #6b7280; }
</style>
