import { Document, ObjectId } from "mongoose";


export default interface Upvote extends Document {
    ipAddress: string,
    user: ObjectId,
    review: ObjectId
}