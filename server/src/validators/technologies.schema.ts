import { z } from 'zod'

export const technologySchema = z.object({
  name: z.string().nonoptional(),
})

export type CreateTechnology = z.infer<typeof technologySchema>
