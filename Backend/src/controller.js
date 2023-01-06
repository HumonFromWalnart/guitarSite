import User from './mongoose.js'

const createUser = async (req, res, next) => {
    console.log(req.body)
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