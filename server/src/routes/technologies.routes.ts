import {
  createTechnology,
  getAllTechnologies,
} from '@/controllers/technologies.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/technologies', createTechnology)
router.get('/technologies', getAllTechnologies)

export default router
