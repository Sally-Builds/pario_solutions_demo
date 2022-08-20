import { Document, ObjectId } from "mongoose";


export default interface Apartment extends Document {
    address: string,
    city: string,
    district: string,
    state: string,
    postalCode: number,
    country: string,
    user: ObjectId,
    review: ObjectId,
}