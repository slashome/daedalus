
import { useRuntimeConfig } from 'nuxt/app'

export type RepositoryMode = 'fake' | 'api'

export function useRepositoryMode(): RepositoryMode {
  const config = useRuntimeConfig()
  return config.public.repositoryMode === 'api' ? 'api' : 'fake'
}
