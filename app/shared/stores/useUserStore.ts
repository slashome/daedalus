import { defineStore } from 'pinia'
import type { User } from '~/features/user/domain/user'
import { userFakeRepository } from '~/features/user/infrastructure/repositories/fake/userFakeRepository'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])
  const currentUser = ref<User | null>(null)

  async function fetchUsers() {
    users.value = await userFakeRepository.getAll()
    if (users.value.length && !currentUser.value) {
      currentUser.value = users.value[0]
    }
  }

  function selectUser(user: User) {
    currentUser.value = user
  }

  return { users, currentUser, fetchUsers, selectUser }
})
