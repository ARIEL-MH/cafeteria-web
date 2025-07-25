import { z } from 'astro:content'

const imageSchema = z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
})

const featuredImageSchema = z.object({
    thumbnail: imageSchema,
    medium: imageSchema,
    medium_large: imageSchema,
    large: imageSchema,
    full: imageSchema,
})

export const BaseWpSchema = z.object({
    id: z.number(),
    title: z.object({
        rendered: z.string()
    }),
    content: z.object({
        rendered: z.string()
    }),
    featured_images: featuredImageSchema,
    acf: z.object({
        subtitle: z.string()
    }),
})

const processSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string()
})

export const ProcessPageSchema = BaseWpSchema.extend({
    acf: z.object({
        subtitle: z.string(),    
    }).catchall(processSchema)
})