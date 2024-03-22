import fastify from 'fastify'
import postgres from 'postgres'
import { z } from 'zod'

import { sql } from './lib/postgres'

const app = fastify()

app.post('/links', async (request, reply) => {
  const createLinkSchema = z.object({
    code: z.string().min(3),
    url: z.string().url()
  })

  const { code, url } = createLinkSchema.parse(request.body)

  try {
    const result = await sql/*sql*/`
      INSERT INTO short_links(code, original_url)
      VALUES (${code}, ${url})
      RETURNING id
    `

    const link = result[0]

    return reply.status(201).send({ short_link_id: link.id })
  } catch (error) {
    if (error instanceof postgres.PostgresError) {
      if (error.code === '23505') {
        return reply.status(400).send({
          message: 'Duplicated code.',
          status: "error",
          status_code: 400
        })
      }
    }

    console.error(error)

    return reply.status(500).send({ message: 'Internal server error.'})
  }
})

app.listen({
  port: 3333
}).then(() => {
  console.log('🚀 HTTP Server Running!')
})
