const mongoose =require  ("mongoose")
const dotenv= require  ("dotenv")

dotenv.config();

const uri = process.env.secure_link || ""

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Your database is ready')
    } catch (error) {
        console.log('Database hates to wake on Mondays')
    }
}

module.exports = connect;