import mongoose from "mongoose";

const AwardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of the trophy is required."],
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
    },
    category: {
        type: String,
        enum: ["trophy", "medal", "badge", "plate"],
        required: [true, "Category is required."],
    },
    isAvailable: {
        type: Boolean, 
        required: [true, "Availability is required."],
    },
    trophyImage: {
        type: String, 
        required: false,
    },
    size: {
        type: String,
        enum: ["small", "medium", "big"],
        required: false
    },
    publicId: {
        type: String,
        required: false,
        unique: true
    },
}, { timestamps: true });

const Award = mongoose.models.Award || mongoose.model("Award", AwardSchema);

export default Award;

