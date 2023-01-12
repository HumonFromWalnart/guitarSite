import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    guitarist: {
        name: String,
        picture: String,
        description: String
    },
    name: String,
    picture: String,
    description: String,
    password: String,
    ticket : String,
    guitar: {
        name: String,
        picture: String,
        description: String
    }
    // registerDate: { type: Date, default: Date.now },
}, { versionKey: false });

const Usermodel = model("User", UserSchema);

export default Usermodel;