import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

const app = express()
const PORT = process.env.PORT || 8080

app.use(helmet())

app.use(express.json())

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
