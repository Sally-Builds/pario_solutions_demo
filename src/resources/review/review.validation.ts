import Joi from "joi";


const create = Joi.object({
    comment: Joi.string().required(),
    images: Joi.string(),
    videos: Joi.string(),
})

export default {create}