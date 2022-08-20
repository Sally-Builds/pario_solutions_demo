import { Schema, model } from "mongoose";
import Upvote from "./upvote.interface";

const upvoteSchema = new Schema<Upvote> ({
    ipAddress: {
        type: String,
        required: [true, 'comment or review is required.']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
        required: [true, 'upvote must have a review it is associated with.']
    },
})

export default model('Upvote', upvoteSchema)