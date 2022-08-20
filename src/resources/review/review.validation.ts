import Joi from "joi";


const create = Joi.object({
    comment: Joi.string().required(),
    images: Joi.array().items(Joi.string()),
    videos: Joi.array().items(Joi.string()),
})

export default {create}