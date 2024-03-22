import { sql } from './lib/postgres'

async function setup() {
  await sql/*sql*/`
    CREATE TABLE IF NOT EXISTS short_links (
      id SERIAL PRIMARY KEY,
      code TEXT UNIQUE,
      original_text TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await sql.end()

  console.log('✅ Setup done successfully!')
}

setup()
