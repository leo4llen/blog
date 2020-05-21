import { createClient } from 'contentful'

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
