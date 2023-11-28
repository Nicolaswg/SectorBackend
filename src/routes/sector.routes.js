import { Router } from 'express'
import { getSector, postUserSector, updateUserSector } from '../controllers/sector.controller.js'
import { postValidator, patchValidator } from '../validators/sectors.validators.js'

const sectorRouter = Router()

sectorRouter.get('/sectors', getSector)

sectorRouter.post('/sectors/user', postValidator, postUserSector)

sectorRouter.patch('/sectors/user/:id', patchValidator, updateUserSector)

export default sectorRouter
