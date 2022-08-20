import { Document, ObjectId } from "mongoose";


export default interface Review extends Document {
    comment: string,
    image: string,
    video: string,
    upVote: number,
    user: ObjectId,
    apartment: ObjectId
}