import { Document, ObjectId } from "mongoose";


export default interface Apartment extends Document {
    address: string,
    city: string,
    district: string,
    state: string,
    postalCode: number,
    country: string,
    // longitude: string,
    // latitude: string,
    user: ObjectId,
    // location: Geolocation
}