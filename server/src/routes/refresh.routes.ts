import { refresh } from '@/controllers/refresh.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/refresh', refresh)

export default router
