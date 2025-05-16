import { z } from 'zod'
import { ZodError } from 'zod'

const schema = {
  post: {
    apiPost: z.object({
      name: z.string().trim().min(3),
      price: z.string().trim().min(2),
    }),
  },
}

export { schema }
