export const pipe = (...fns) => (arg) =>
  fns.reduce((result, fn) => fn(result), arg)

export const memoizePosts = (fn) => {
  let posts = null
  return async (slug) => {
    if (!posts) posts = await fn()
    return slug ? posts.find((post) => post.slug) : posts
  }
}

export const preventDefault = (e) => {
  e.preventDefault()
  return e
}
