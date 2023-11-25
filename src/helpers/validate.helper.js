import { validationResult } from 'express-validator'

const validateHelper = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    res.status(403).send({ errors: err.array() })
  }
}

export default validateHelper
