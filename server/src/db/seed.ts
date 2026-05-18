import bcrypt from 'bcryptjs'
import { db } from './db.js'
import { users } from './schema.js'

const seed = async () => {
  const [existing] = await db.select({ id: users.id }).from(users).limit(1)

  if (!existing) {
    const password = await bcrypt.hash('qwerty123', 10)
    await db.insert(users).values({
      username: 'admin',
      password,
    })

    console.log('Seed completed successfully!')
    return
  }

  console.log('Seed already exists, skipping...')
  return
}

seed().catch(console.error)
