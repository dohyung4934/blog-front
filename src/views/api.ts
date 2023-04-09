const apiPrefix = 'http://localhost:8080'

export async function requestApi <T> (path: string, method: string): Promise<T> {
    const result = await fetch(apiPrefix + path, { method })
    return await result.json() as T
}