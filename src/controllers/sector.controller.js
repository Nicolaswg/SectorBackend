import { connectDB } from '../db.js'
import Sector from '../models/sector.model.js'
import User from '../models/user.model.js'

export const getSector = async (req, res) => {
  try {
    connectDB()
    const sectors = await Sector.find().sort({ name: 1 })
    return res.status(200).json(sectors)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const postUserSector = async (req, res) => {
  const { name, sector, terms } = req.body
  try {
    connectDB()
    const user = await User.findOne({ name })
    if (user) return res.status(409).json({ error: 'User already exists' })
    const newUser = new User({ name, sector, terms })
    await newUser.save()
    return res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}
