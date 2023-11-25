import { Router } from 'express'
import { getSector, postUserSector } from '../controllers/sector.controller.js'
import validator from '../validators/sectors.validators.js'
const sectorRouter = Router()

sectorRouter.get('/sectors', getSector)

sectorRouter.post('/sectors/user', validator, postUserSector)

export default sectorRouter
