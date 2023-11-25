import { check } from 'express-validator'
import validateHelper from '../helpers/validate.helper.js'
import defaultSectorData from '../mocks/sector.mocks.js'

const validator = [
  check('name')
    .exists()
    .isString()
    .custom((value, { req }) => {
      if (value.length < 2) {
        throw new Error('Name must be at least 2 characters long')
      }
      if (value.length > 50) {
        throw new Error('Name must be less than 50 characters long')
      }
      if (value.length === 0) {
        throw new Error('Name cannot be empty')
      }
      if (!value.match(/^[a-zA-Z\s]*$/)) {
        throw new Error('Name must only contain letters and spaces')
      }

      return value
    })
    .not()
    .isEmpty(),
  check('sector')
    .exists()
    .isString()
    .isIn(defaultSectorData.map((sector) => sector.name))
    .not()
    .isEmpty(),
  check('terms')
    .exists()
    .isBoolean(),
  (req, res, next) => {
    validateHelper(req, res, next)
  }
]

export default validator
