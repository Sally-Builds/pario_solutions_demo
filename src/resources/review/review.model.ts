import { Schema, model } from "mongoose";
import Review from "./review.interface";

const reviewSchema = new Schema<Review> ({
    comment: {
        type: String,
        required: [true, 'comment or review is required.']
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    upVote: {
        type: Number,
        default: 0,
    },
    apartment: {
        type: Schema.Types.ObjectId,
        ref: 'Apartment',
        required: [true, 'Review must be on an apartment']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Review must be uploaded by a user.']
    },
})

export default model('Review', reviewSchema)