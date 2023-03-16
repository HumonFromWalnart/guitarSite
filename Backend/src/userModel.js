const { model, Schema } = require  ('mongoose');

const UserSchema = new Schema({
    name: String,
    password: String,
    email : String,
    profileImg : String,
}, { versionKey: false });

const Usermodel = model("User", UserSchema);

module.exports = Usermodel;