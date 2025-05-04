import Joi from "joi";

import { JoiBaseSchema } from "../../ts/index.js";

function generateBaseSchema(): JoiBaseSchema {
    return {
        body: Joi.object({}).required(),
        path: Joi.object({}).required(),
        query: Joi.object({}).required(),
    };
}

export default generateBaseSchema;
