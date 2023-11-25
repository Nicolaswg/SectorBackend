import express from 'express'
import cors from 'cors'
import config from './config.js'
import morgan from 'morgan'
import { connectDB } from './db.js'
import apiRoutes from './routes/api.routes.js'

// Initialize app
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hello Im Nicolas Gonzalez welcome to my Coding Challenge api </h1>')
})
apiRoutes(app)

// Connect to DB and start server
connectDB()
app.listen(config.SERVER_PORT || 3000, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT || 3000}`)
})

export default app
