import { Schema, model } from "mongoose"

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Post ID is required'],
    },
  }
)

commentSchema.methods.toJSON = function() {
  const { ...comment } = this.toObject()
  return comment
}

export default model('Comment', commentSchema)
