import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'


export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2025-01-01', // možeš i neki datum iz ove godine
  useCdn: true,
})

const builder = createImageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)
