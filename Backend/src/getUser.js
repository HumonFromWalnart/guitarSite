const User = require("./userModel.js");

const getUser = async (req, res) => {
    const { id } = req.params;
    console.log('h', id)
    try {
        const user = await User.findById(id);
        console.log('user', user);
        res.status(200).json({
            message: `You just called out ${user.name}`,
            data: user
        })
    } catch (err) {
        console.log(err, 'err')
        return res.status(400).json({ message: err, data: null })
    }
}

module.exports = getUser;