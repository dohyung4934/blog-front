const API_PREFIX = import.meta.env.VITE_API_PREFIX
const API_REQUEST_HEADERS = {
  "Content-Type": "application/json; charset=utf-8"
}

export async function requestApi<T>(path: string, method: string, body?: BodyInit): Promise<T> {
  const result = await fetch(API_PREFIX + path, { method, body, headers: API_REQUEST_HEADERS })
  return await result.json() as T
}
