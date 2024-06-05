import mongoose, { ConnectOptions } from 'mongoose'

export const connectMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB as string, {} as ConnectOptions)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error)
  }
}
