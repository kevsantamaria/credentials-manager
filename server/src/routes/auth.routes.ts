import { auth } from '@/controllers/auth.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/login', auth)

export default router
