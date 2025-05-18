import { Schema, model } from "mongoose"

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      maxLength: [100, `Can't exceed 100 characters`],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course is required'],
    },
    date: {
      type: Date,
      default: Date.now,
    }
  }
)

postSchema.methods.toJSON = function() {
  const { ...post } = this.toObject()
  return post
}

export default model('Post', postSchema)

