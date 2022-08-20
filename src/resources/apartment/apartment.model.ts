import { Schema, model } from "mongoose";
import Apartment from "./apartment.interface";

import reviewModel from "../review/review.model";
import upvoteModel from "../upvote/upvote.model";

const apartmentSchema = new Schema<Apartment> ({
    address: {
        type: String,
        required: [true, 'Address is required.']
    },
    city: {
        type: String,
        required: [true, 'city is required.'],
    },
    district: {
        type: String,
        required: [true, 'Apartment district is required.']
    },
    state: {
        type: String,
        required: [true, 'Apartment state is required.']
    },
    postalCode: {
        type: Number
    },
    country: {
        type: String,
        required: [true, 'Apartment country is required.']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Apartment must be uploaded by a user.']
    },
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
    },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}
)

apartmentSchema.post(/^findOneAnd/, async function(doc) {
    //clear review record
    await reviewModel.findByIdAndDelete(doc.review)
    //clear all upvote record
    await upvoteModel.deleteMany({user: doc.user, review: doc.review})
})

export default model('Apartment', apartmentSchema)