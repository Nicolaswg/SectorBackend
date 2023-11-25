import { Schema, model } from 'mongoose'

const sectorShema = new Schema({
  name: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Sector = model('Sector', sectorShema)

export default Sector
