import  mongoose  from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const MONGO_URL = process.env.MONGO_URL as string;

mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
})

const userSchema = new mongoose.Schema({
    username: {required: true, type: String, unique: true, trim:true, lowercase:true, minLength: 3, maxLength: 30},
    password: {required: true, type: String, minLength: 3},
    firstname: {required: true, type: String, trim: true, maxLength: 50},
    lastname: {required: true, type: String, trim: true, maxLength: 50},
    
});

export const User = mongoose.model("User", userSchema);
// export User;