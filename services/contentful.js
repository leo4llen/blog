import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { memoizePosts } from 'utils'
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
// memoizing this since this will be fetched multiple times while running the build

export const getPosts = memoizePosts(() => {
  return client
    .getEntries()
    .then((entries) =>
      entries.items.map((item) => ({
        title: item.fields.title,
        slug: item.fields.slug,
        post: documentToHtmlString(item.fields.post),
        id: item.sys.id,
        date: item.sys.createdAt,
      }))
    )
    .catch(console.error)
})
