const PostModel= require  ('./postModel.js')

const getPosts = async (req, res) => {

   const {skip, limit} = req.body;
   console.log("asd")

    try {
        const posts = await PostModel.find({}).skip(skip).limit(limit).populate('creator');
        res.status(200).json({
            message: "Friendly threats detected",
            data: posts
        })
    } catch (err) {
        return res.status(400).json({ message: err, data: null })
    }
}

module.exports = getPosts;