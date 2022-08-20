import { Document, ObjectId } from "mongoose";


export default interface Review extends Document {
    comment: string,
    images: string[],
    videos: string[],
    upvote: number,
    user: ObjectId,
    apartment: ObjectId
}