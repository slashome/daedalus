import type { User } from '../../../domain/user'

const fakeUsers: User[] = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: 'bob@example.com' },
  { id: '3', name: 'Charlie', email: 'charlie@example.com' },
]

export const userFakeRepository = {
  async getAll(): Promise<User[]> {
    return Promise.resolve([...fakeUsers])
  },

  async getById(id: string): Promise<User | undefined> {
    return Promise.resolve(fakeUsers.find(u => u.id === id))
  },
}
