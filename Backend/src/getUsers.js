const User = require("./userModel.js");

const getUsers = async (req, res) => {
    try {
        const { start, end } = req.query;
        const users = await User.find({}).skip(start).limit(end - start);
        if (users.length == 1) {
            res.json({ message: "Friendly threat detected", data: users })
            return;
        }

        res.status(200).json({
            message: "Friendly threats detected",
            data: users
        })
    } catch (err) {
        return res.status(400).json({ message: err, data: null })
    }
}

module.exports = getUsers;