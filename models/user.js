import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    accessToken: {
        type: String,
        required: [true, "Access Token is required for every new user."]
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        required: [true, "User role is required."],
        default: "USER"
    }
}, { timestamps: true });

UserSchema.pre("save", async function(next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error); 
    }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;