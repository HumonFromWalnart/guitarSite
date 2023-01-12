import User from './mongoose.js'
import Jwt from 'jsonwebtoken'

const createUser = async (req, res, next) => {
    console.log(req.body)

const token = Jwt.sign(
    {name : req.bidy.name, password : req.bidy.password},
    process.env.JWT_SECRET || "password",
    { expiresIn : "132m" },
    console.log(token)
)

    if (
        !req.body?.name ||
        !req.body?.password
    ) {
        res
            .status(400)
            .json({ message: "it includess your whole information" })
        return
    }
    const createUser = await User.create({ ...req.body });
    res
        .status(201)
        .json({ message: 'new user has created', data: createUser })

}

export default createUser;

import jwt from 'jsonwebtoken'

