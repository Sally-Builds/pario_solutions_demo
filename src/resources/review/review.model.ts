import { Schema, model } from "mongoose";
import apartmentModel from "../apartment/apartment.model";
import Review from "./review.interface";

const reviewSchema = new Schema<Review> ({
    comment: {
        type: String,
        required: [true, 'comment or review is required.']
    },
    images: {
        type: [String],
    },
    videos: {
        type: [String],
    },
    upvote: {
        type: Number,
        default: 0,
    },
    apartment: {
        type: Schema.Types.ObjectId,
        ref: 'Apartment',
        unique: true,
        required: [true, 'Review must be on an apartment']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Review must be uploaded by a user.']
    },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}
)

reviewSchema.post('save', async function(doc): Promise<void> {
    try {
        const data = await apartmentModel.findByIdAndUpdate(doc.apartment, {review: doc.id})
        if(!data) {
            throw new Error('apartment not found')
        }
    } catch (error) {
        const data = await apartmentModel.findByIdAndDelete(doc.apartment)
        throw new Error('apartment not found')
    }
})

reviewSchema.pre('save', async function(next): Promise<void> {
    try {
        const data = await apartmentModel.findById((this as any).apartment)
        if(!data) {
            throw new Error('apartment not found')
        }
    } catch (error) {
        throw new Error('apartment not found')
    }
})

export default model('Review', reviewSchema)