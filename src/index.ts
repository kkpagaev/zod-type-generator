import { z } from "zod"

const schema = z.object({
  test: z.number()
})

console.log(schema.parse({
  test: 1
}));

