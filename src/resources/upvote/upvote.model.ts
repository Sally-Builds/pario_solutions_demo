import { Schema, model } from "mongoose";
import Upvote from "./upvote.interface";

import reviewModel from "../review/review.model";

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
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}
)

upvoteSchema.statics.aggregateUpvote = async function (review_id: string) {
    const stats = await this.aggregate([
        {
            $match: {
                review: review_id,
            },
        },
        {
            $group: {
                _id: '$review',
                count: { $sum: 1 },
            },
        },
    ]);

    await reviewModel.findByIdAndUpdate(review_id, {upvote: stats[0].count})
}


upvoteSchema.post('save', async function (doc) {
    (this as any).constructor.aggregateUpvote(doc.review);
});

upvoteSchema.post(/^findOneAnd/, async function (doc, next) {
    await (doc as any).constructor.aggregateUpvote(doc.review);
    next()
});

export default model('Upvote', upvoteSchema)