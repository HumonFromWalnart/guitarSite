import PostModel from './postModel.js'

const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        // if(posts.length == 1){
        //     res.json({message: "Friendly threat detected", data : posts})
        //     return;
        // }
        console.log('hi')
        
        res.status(200).json({
            message: "Friendly threats detected",
            data: posts
        })
    } catch (err) {
        return res.status(400).json({ message: err, data: null })
    }
}

export default getPosts;