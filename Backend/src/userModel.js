const { model, Schema } = require  ('mongoose');

const UserSchema = new Schema({
    name: String,
    password: String,
    email : String,
    role : String,
    // registerDate: { type: Date, default: Date.now },
}, { versionKey: false });

const Usermodel = model("User", UserSchema);

module.exports = Usermodel;