import { z } from 'zod'
export const registerSchema = z.object({
  email: z.string().email({ message: 'Valid email required' }),
})

export type Register = z.infer<typeof registerSchema>
