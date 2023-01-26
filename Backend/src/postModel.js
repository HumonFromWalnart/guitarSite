const{ model, Schema } = require  ('mongoose');

const PostSchema = new Schema({
    // guitar: {
    name: String,
    picture: String,
    description: String,
    like: Number,
    creater: { type: Schema.Types.ObjectId, ref: 'User' }
    // }
}, { versionKey: false });

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
