import mongoose from 'mongoose';

const AwardOrderSchema = new mongoose.Schema({
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
},{timestamps: true});


const AwardOrder = mongoose.models.AwardOrder || mongoose.model("AwardOrder", AwardOrderSchema);
export default AwardOrder;
