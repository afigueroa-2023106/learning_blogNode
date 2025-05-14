import Post from './post.model.js'

export const createPost = async (req, res) => {
  try {
    const { title, content, course } = req.body
    const newPost = new Post({ title, content, course })
    await newPost.save()
    return res.status(201).send({
      success: true,
      message: 'Post created successfully',
      post: newPost,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Error creating post',
      error,
    })
  }
}

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id).populate('course')
    if (!post) {
      return res.status(404).send({
        success: false,
        message: 'Post not found',
      })
    }
    return res.send({
      success: true,
      post,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Error retrieving post',
      error,
    })
  }
}

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('course')
    return res.send({
      success: true,
      posts,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Error retrieving posts',
      error,
    })
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, course } = req.body
    const post = await Post.findById(id)
    if (!post) {
      return res.status(404).send({
        success: false,
        message: 'Post not found',
      })
    }
    post.title = title || post.title
    post.content = content || post.content
    post.course = course || post.course
    await post.save()
    return res.send({
      success: true,
      message: 'Post updated successfully',
      post,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Error updating post',
      error,
    })
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findByIdAndDelete(id)
    if (!post) {
      return res.status(404).send({
        success: false,
        message: 'Post not found',
      })
    }
    return res.send({
      success: true,
      message: 'Post deleted successfully',
      post,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Error deleting post',
      error,
    })
  }
}

