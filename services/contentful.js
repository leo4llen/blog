import { createClient } from 'contentful'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
        title: item?.fields?.title || '',
        slug: item?.fields?.slug || '',
        post: item?.fields?.post || '',
        id: item?.sys?.id || '',
        date: item?.sys?.createdAt || '',
      }))
    )
    .catch((e) => {
      console.err("Hmph, Can't fetch this for some reason", e)
    })
})

export const renderPosts = (post, ImageContainer) => {
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title, description } = node.data.target.fields
        return /^image/.test(file.contentType) ? (
          <ImageContainer title={title} alt={description} src={file.url} />
        ) : (
          <span></span>
        )
      },
    },
  }
  return documentToReactComponents(post, renderOptions)
}
