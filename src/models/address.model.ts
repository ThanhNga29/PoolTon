import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    address: {
      type: String
    }
  },
  { timestamps: true }
)

const userModel = model('user', userSchema)
export default userModel
