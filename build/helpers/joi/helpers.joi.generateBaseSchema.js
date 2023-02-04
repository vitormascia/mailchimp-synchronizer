import Joi from "joi";
function generateBaseSchema() {
    return {
        body: Joi.object({}).required(),
        path: Joi.object({}).required(),
        query: Joi.object({}).required(),
    };
}
export default generateBaseSchema;
//# sourceMappingURL=helpers.joi.generateBaseSchema.js.map