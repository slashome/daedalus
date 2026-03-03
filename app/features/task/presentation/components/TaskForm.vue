<template>
  <form class="task-form" @submit.prevent="submit">
    <BaseInput
      v-model="title"
      :placeholder="$t('task.placeholder')"
      :label="$t('tasks.add')"
    />
    <BaseButton type="submit" variant="primary" :disabled="!title.trim()">
      {{ $t('tasks.add') }}
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/BaseInput.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'

const emit = defineEmits<{ submit: [title: string] }>()
const { t } = useI18n()
const title = ref('')

function submit() {
  if (!title.value.trim()) return
  emit('submit', title.value.trim())
  title.value = ''
}
</script>

<style scoped>
.task-form { display: flex; gap: 0.75rem; align-items: flex-end; margin-bottom: 1.5rem; }
.task-form > :first-child { flex: 1; }
</style>
