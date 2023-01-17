import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    name: String,
    picture: String,
    description: String,
    password: String,
    ticket : String,
    // registerDate: { type: Date, default: Date.now },
}, { versionKey: false });

const Usermodel = model("User", UserSchema);

export default Usermodel;