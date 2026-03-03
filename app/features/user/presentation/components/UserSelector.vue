<script setup lang="ts">
import { useUserStore } from '@/features/user/presentation/stores/useUserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { users, currentUser } = storeToRefs(userStore)

function onSelect(event: Event) {
  const id = (event.target as HTMLSelectElement).value
  const user = users.value.find(u => u.id === id)
  if (user) userStore.selectUser(user)
}
</script>

<template>
  <div class="user-selector">
    <label>{{ $t('users.select') }}</label>
    <select :value="currentUser?.id" @change="onSelect">
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.user-selector { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
label { font-weight: 500; }
select { padding: 0.4rem 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.95rem; }
</style>
