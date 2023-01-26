const Post = require('./postModel.js');
const User = require('./userModel.js');

const createPost = async (req, res, next) => {

    const { userId } = req.body;
    const user = await User.findOne({ userId });
    console.log(user)
    if (
        !req.body?.title ||
        !req.body?.file ||
        !req.body?.description
    ) {
        res
            .status(401)
            .json({ message: "make dull post you idiot" })
    } else {

        const createPost = await Post.create({ ...req.body, creater: user })
        res
            .status(201)
            .json({ message: 'new post has created', data: createPost })
    }
}

module.exports = createPost;