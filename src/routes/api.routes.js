import { Router } from 'express'
import sectorRouter from './sector.routes.js'

function apiRoutes (app) {
  const router = Router()
  app.use('/api/v1', router)

  router.use(sectorRouter)
}

export default apiRoutes
