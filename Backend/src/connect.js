import mongoose from "mongoose";

const uri = "mongodb+srv://chara:Lmong@cluster0.gkyndj3.mongodb.net/guitarSite?retryWrites=true&w=majority";

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('LEsgooooooo WOOOOOOOO')
    } catch (error) {
        console.log('NOOOOOOOo')
    }
}

export default connect;