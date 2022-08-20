import Joi from "joi";


const create = Joi.object({
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    district: Joi.string().required(),
    state: Joi.string().required(),
    postalCode: Joi.string(),
})

export default {create}