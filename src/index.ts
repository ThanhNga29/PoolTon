import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose, { ConnectOptions } from 'mongoose'
import { StonApiClient } from '@ston-fi/api'
import 'dotenv/config'
// import { connectMongo } from '~/config/db'

const app: express.Application = express()
const PORT = process.env.PORT
import { userRouters } from './API/routers'

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))
// console.log(process.env.MONGODB)
const connectMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB as string, {} as ConnectOptions)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error)
  }
}
app.use('/api/user', userRouters)
connectMongo()

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
