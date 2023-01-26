const PostModel= require  ('./postModel.js')

const getPosts = async (req, res) => {

    const skip = req.query.skip;
    
    // let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();
    try {
        const posts = await PostModel.find({}).skip(skip).populate('creater');
        res.status(200).json({
            message: "Friendly threats detected",
            data: posts
        })
    } catch (err) {
        return res.status(400).json({ message: err, data: null })
    }
}

module.exports = getPosts;