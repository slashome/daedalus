<template>
  <div class="task-item" :class="{ completed: task.completed }">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle', task.id)"
    />
    <div class="task-content">
      <span class="task-title">{{ task.title }}</span>
      <span v-if="task.description" class="task-desc">{{ task.description }}</span>
    </div>
    <BaseButton variant="danger" @click="$emit('delete', task.id)">
      {{ $t('tasks.delete') }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/features/task/domain/task'
import BaseButton from '@/shared/ui/BaseButton.vue'

defineProps<{ task: Task }>()
defineEmits<{ toggle: [id: string]; delete: [id: string] }>()
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  margin-bottom: 0.5rem;
}
.task-item.completed .task-title { text-decoration: line-through; color: #9ca3af; }
.task-content { flex: 1; display: flex; flex-direction: column; }
.task-title { font-weight: 500; }
.task-desc { font-size: 0.8rem; color: #6b7280; }
input[type="checkbox"] { width: 1.1rem; height: 1.1rem; cursor: pointer; }
</style>
