"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const apartmentSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Apartment must be uploaded by a user.']
    },
});
exports.default = (0, mongoose_1.model)('Apartment', apartmentSchema);
