const User = require("./userModel.js");

const getUser = async (req, res) => {
    const { id } = req.params;
    // const { firstName } = req.body;
    try {
        const user = await User.findById(id);
        console.log(user);
        res.status(200).json({
            message: `You just called out ${user.guitarist?.name}`,
            data: user
        })
    } catch (err) {
        return res.status(400).json({ message: err, data: null })
    }
}

module.exports = getUser;