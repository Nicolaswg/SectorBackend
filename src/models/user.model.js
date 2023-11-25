import { Schema, model } from 'mongoose'

const userShema = new Schema({
  name: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  terms: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

const User = model('User', userShema)

export default User
