const Post = require("./postModel.js");

const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        // console.log(post);
        res.status(200).json({
            message: `You just called out ${post.name}`,
            data: post
        })
        return;
    } catch (err) {
        res.status(400).json({ message: err, data: null })
        return;
    }
}

module.exports = getPost;