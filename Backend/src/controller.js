const User = require('./userModel.js')
const Jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")


const createUser = async (req, res, next) => {

    const hash = bcrypt.hashSync(req.body.password, 7)


    if (
        !req.body?.name ||
        !req.body?.password ||
        !req.body?.email ||
        !req.body?.role
    ) {
        res
            .status(400)
            .json({ message: "it includess your whole information" })
        return
    }
    const createUser = await User.create({ ...req.body, password: hash, });


    const token = Jwt.sign(
        { name: req.body.name, password: req.body.password },
        process.env.JWT_SECRET || "password",
        { expiresIn: "132m" },
    )

    res
        .status(201)
        .json({ message: 'new user has created', data: createUser, token })


    // console.log(token)
}

module.exports = createUser;
