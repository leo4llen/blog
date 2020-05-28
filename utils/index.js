export const asyncMemoize = async (fn) => {
  let cache = null
  if (cache) return cache
  cache = await fn()
  return cache
}
