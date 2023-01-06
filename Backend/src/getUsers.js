import User from "./mongoose.js";

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if(users.length == 1){
            res.json({message: "Friendly threat detected", data : users})
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

export default getUsers;