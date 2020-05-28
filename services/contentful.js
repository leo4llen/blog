import { createClient } from 'contentful'
import { asyncMemoize } from 'utils'
const credentials =
  process.env.NODE_ENV === 'dev'
    ? {
        space: process.env.SPACE_ID,
        accessToken: process.env.DELIVERY_ACCESS_TOKEN,
      }
    : {
        space: process.env.SPACE_ID,
        accessToken: process.env.PREVIEW_ACCESS_TOKEN,
        host: 'preview.contentful.com',
      }

const client = createClient(credentials)

export const getPosts = asyncMemoize(() => {
  return client
    .getEntries()
    .then((entries) =>
      entries.items.map((item) => ({
        title: item.fields.title,
        slug: item.fields.slug,
        id: item.sys.id,
        date: item.sys.createdAt,
      }))
    )
    .catch(console.error)
})
