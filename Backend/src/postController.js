import Post from './postModel.js'

const createPost = async (req, res, next) => {
    // 3
    // if (
    //     !req.body.guitar
    // ) {
    //     res
    //         .status(400)
    //         .json({ message: "no guitar?" })
    // }
    const createPost = await Post.create({ ...req.body })
    res
        .status(201)
        .json({ message: 'new post has created', data: createPost })
}

export default createPost;