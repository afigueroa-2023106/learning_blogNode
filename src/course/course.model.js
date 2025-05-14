import { Schema, model } from "mongoose"

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    maxLength: [50, 'Title too long']
  },
  instructor: {
    type: String,
    required: [true, 'Instructor is required']
  },
  durationWeeks: {
    type: Number,
    required: [true, 'Duration is required'],
    min: [1, 'Minimum duration is 1 week']
  },
  level: {
    type: String,
    enum: ['Cuarto', 'Quinto', 'Sexto'],
    required: [true, 'Level is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

courseSchema.methods.toJSON = function() {
  const { ...course } = this.toObject()
  return course
}

export default model('Course', courseSchema)
