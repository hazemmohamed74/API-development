import Joi from "joi";


export const signUp = {

        body: Joi.object().required().keys(),
        name : Joi.string().required().min(2).max(15),
        email : Joi.string().email().required(),
        password: Joi.string().required(),    
    }