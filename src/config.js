import dotenv from 'dotenv'

dotenv.config()

const config = {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  MONGO_URI: process.env.MONGO_URI
}

export default config
