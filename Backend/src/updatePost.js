import Post from "./postModel.js";

const updatePost = async (req, res) => {
    const { id } = req.params;

    console.log(id)
    try {
        const updated = await Post.findByIdAndUpdate(id, { ...req.body });
        console.log(updated)
        res.status(200).json({
            message: `Post with ${id} id updated`,
            data: updated
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err, data: null })
    }
}

export default updatePost;