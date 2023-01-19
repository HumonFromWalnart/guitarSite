import { model, Schema } from 'mongoose';

const PostSchema = new Schema({
    // guitar: {
    name: String,
    picture: String,
    description: String,
    like: Number,
    creater: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    // }
}, { versionKey: false });

const PostModel = model("Post", PostSchema);

export default PostModel;
