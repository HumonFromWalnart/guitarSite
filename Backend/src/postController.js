const Post = require('./postModel.js');
const User = require('./userModel.js');

const createPost = async (req, res, next) => {

    const { id } = req.body;
    const user = await User.findOne({ id });
    console.log(id, user) 
    if (
        !req.body?.message
    ) {
        res
            .status(401)
            .json({ message: "make dull post you idiot" })
    } else {

        const createPost = await Post.create({ ...req.body, creator: user })
        res
            .status(201)
            .json({ message: 'new post has created', data: createPost })
    }
}

module.exports = createPost;