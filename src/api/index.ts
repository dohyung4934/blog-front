import { useAuthStore } from '@/stores/auth'

const API_PREFIX = import.meta.env.VITE_API_PREFIX
const API_REQUEST_HEADERS = {
  "Content-Type": "application/json; charset=utf-8"
}

export async function requestApi<T>(path: string, method: string, body?: BodyInit): Promise<T> {
  const authStore = useAuthStore()

  let headers
  if (authStore.token === null) {
    headers = API_REQUEST_HEADERS
  } else {
    headers = {
      ...API_REQUEST_HEADERS,
      authorization: `Bearer ${authStore.token}`
    }
  }

  const result = await fetch(API_PREFIX + path, { method, body, headers })
  return await result.json() as T
}
