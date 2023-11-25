import mongoose from 'mongoose'
import config from './config.js'

let isConnected = false
export const connectDB = async () => {
  mongoose.set('strictQuery', true)

  if (!config.MONGO_URI) {
    throw new Error('MONGO_URI is not defined')
  }
  if (isConnected) return console.log('Already connected')
  try {
    await mongoose.connect(config.MONGO_URI)
    isConnected = true
    console.log('>>> MongoDB connected')
  } catch (err) {
    console.log(err)
  }
}

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect()
    console.log('>>> MongoDB disconnected')
  } catch (err) {
    console.log(err)
  }
}
