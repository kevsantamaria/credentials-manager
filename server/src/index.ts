import { errorHandler } from '@/middlewares/error.middleware.js'
import auth from '@/routes/auth.routes.js'
import refresh from '@/routes/refresh.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'

dotenv.config()

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

app.use(auth)
app.use(refresh)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
