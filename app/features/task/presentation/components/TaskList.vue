<template>
  <div class="task-list">
    <p v-if="tasks.length === 0" class="empty">{{ $t('tasks.empty') }}</p>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="$emit('toggle', $event)"
      @delete="$emit('delete', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/features/task/domain/task'
import TaskItem from './TaskItem.vue'

defineProps<{ tasks: Task[] }>()
defineEmits<{ toggle: [id: string]; delete: [id: string] }>()
</script>

<style scoped>
.empty { color: #9ca3af; text-align: center; padding: 2rem; }
</style>
