import { defineCollection, z } from 'astro:content';

const items = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    width: z.number(),
    height: z.number(),
  }),
});

export const collections = {
  items,
}; 