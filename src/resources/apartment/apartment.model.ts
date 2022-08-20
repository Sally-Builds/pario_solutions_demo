import { Schema, model } from "mongoose";
import Apartment from "./apartment.interface";


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
})

export default model('Apartment', apartmentSchema)