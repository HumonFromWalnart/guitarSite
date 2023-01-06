import User from "./mongoose.js";

const loginUser = async (req, res) => {

    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });
        if (user?.password == password) {
            res.status(200).json({
                message: `You just called out ${user.guitarist}`,
                data: user
            })
        } else {
            res.status(401).json({
                message: "Get off, you bloody theif",
                data: user
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err, data: null })
    }
}

export default loginUser;
// import User from './mongoose.js'

// const loginUser = async (req, res, next) => {

//     const logged = await User.findOne({ email: req.body?.email });

//     console.log(logged);

// }
// export default loginUser;