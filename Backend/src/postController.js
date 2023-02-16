const Post = require('./postModel.js');
const User = require('./userModel.js');

const createPost = async (req, res, next) => {

    const { id } = req.body;
    if (
        !req.body?.message
    ) {
        res
            .status(401)
            .json({ message: "make dull post you idiot" })
    } else {

        const createPost = await Post.create({ ...req.body, creator: id, })
        res
            .status(201)
            .json({ message: 'new post has created', data: createPost })
    }
}

module.exports = createPost;