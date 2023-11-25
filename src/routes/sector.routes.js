import { Router } from 'express'
import { getSector, postUserSector } from '../controllers/sector.controller.js'

const sectorRouter = Router()

sectorRouter.get('/sectors', getSector)

sectorRouter.post('/sectors/user', postUserSector)

export default sectorRouter
