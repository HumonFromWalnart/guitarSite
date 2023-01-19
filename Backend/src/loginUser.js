import User from "./userModel.js";
import jwt from "jsonwebtoken"

const loginUser = async (req, res) => {

    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });
        console.log(user)
        const token = jwt.sign(
            { name: req.body.name, password: req.body.password },
            process.env.JWT_SECRET || "password",
            { expiresIn: "132m" },
        )
        res.status(200).json({
            message: `You're logged in as ${user.name}`,
            data: user,
            token
        })

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err, data: null })
    }
}

export default loginUser;
// import User from './userModel.js'

// const loginUser = async (req, res, next) => {

//     const logged = await User.findOne({ email: req.body?.email });

//     console.log(logged);

// }
// export default loginUser;