const{ model, Schema } = require  ('mongoose');

const PostSchema = new Schema({
    message: String,
    image: String,
    creator: { type: Schema.Types.ObjectId, ref: 'User' }
}, { versionKey: false });

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
