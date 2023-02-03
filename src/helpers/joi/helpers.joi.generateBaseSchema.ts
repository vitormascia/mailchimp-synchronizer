import Joi from "joi";

import { IJoiBaseSchema } from "../../ts/index.js";

function generateBaseSchema(): IJoiBaseSchema {
    return {
        body: Joi.object({}).required(),
        path: Joi.object({}).required(),
        query: Joi.object({}).required(),
    };
}

export default generateBaseSchema;
