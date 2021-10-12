import { Schema, model } from 'mongoose'

const schemaTask = new Schema({
  title: {
    type: String,
    require: true
  },
  selected: {
    type: Boolean,
    require: true
  }
})

export default model('Task', schemaTask)
