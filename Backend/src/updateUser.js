import User from "./userModel.js";

const updateUser = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const updated = await User.findOneAndUpdate({ _id: id }, { ...req.body });
        console.log(updated)
        res.status(200).json({
            message: `User with ${id} id got updated`,
            data: updated
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err, data: null })
    }
}

export default updateUser;