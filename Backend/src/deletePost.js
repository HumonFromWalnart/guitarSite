const Post = require("./postModel.js");

const deletePost = async (req, res) => {
    const { id } = req.params;
    // const { postId } = req.body;
    try {
        const deleted = await Post.findOneAndDelete(id);
        res.status(200).json({
            message: `Post with ${id} id got deleted`,
            data: deleted
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err, data: null })
    }
}

module.exports = deletePost;