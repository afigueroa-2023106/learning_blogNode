import Comment from './comment.model.js'
import Post from '../post/post.model.js'

export const saveComment = async (req, res) => {
    try {
        const data = req.body

        const newComment = new Comment(data)
        await newComment.save()

        return res.send({
            success: true,
            message: 'Comment saved successfully'
        })

    } catch (e) {
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'General error',
            error: e
        })
    }
}

export const getComment = async (req, res) => {
    try {
        const { id } = req.params

        const comment = await Comment.findById(id).populate('postId')

        if (!comment) {
            return res.status(404).send({
                success: false,
                message: 'Comment not found'
            })
        }

        return res.send({
            success: true,
            message: 'Comment found',
            comment
        })

    } catch (e) {
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'General error',
            error: e
        })
    }
}

export const getAllComments = async (req, res) => {
    try {
        const { limit = 20, skip = 0 } = req.query

        const comments = await Comment.find()
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .populate('postId')

        if (comments.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'Comments not found'
            })
        }

        return res.send({
            success: true,
            message: 'Comments found',
            comments
        })

    } catch (e) {
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'General error',
            error: e
        })
    }
}

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        const updated = await Comment.findByIdAndUpdate(id, data, { new: true })

        if (!updated) {
            return res.status(404).send({
                success: false,
                message: 'Comment not found'
            })
        }

        return res.send({
            success: true,
            message: 'Comment updated',
            comment: updated
        })

    } catch (e) {
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'General error',
            error: e
        })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params

        const deleted = await Comment.findByIdAndDelete(id)

        if (!deleted) {
            return res.status(404).send({
                success: false,
                message: 'Comment not found'
            })
        }

        return res.send({
            success: true,
            message: 'Comment deleted',
            comment: deleted
        })

    } catch (e) {
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'General error',
            error: e
        })
    }
}

export const getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params
    const comments = await Comment.find({ postId }).populate('postId')
    return res.send({
      success: true,
      comments,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Error retrieving comments by post',
      error,
    })
  }
}
