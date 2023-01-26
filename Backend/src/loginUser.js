const User = require  ("./userModel.js");
const jwt= require  ("jsonwebtoken")
const bcrypt =require  ('bcrypt')

const loginUser = async (req, res) => {

    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });
        const result = bcrypt.compare(password, user?.password)
        console.log(user)

        const token = jwt.sign(
            { name: req.body.name, password: req.body.password },
            process.env.JWT_SECRET || "password",
            { expiresIn: "132m" },
        )
        if (result) {
            res.status(200).json({
                message: `You're logged in as ${user.name}`,
                data: user,
                token
            })
        }
        else res.status(401).json({
            message: "Get off! You bloody thief!"
        })


    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err, data: null })
    }
}

module.exports = loginUser;
// constUser require './userModel.js'

// const loginUser = async (req, res, next) => {

//     const logged = await User.findOne({ email: req.body?.email });

//     console.log(logged);

// }
// export default loginUser;