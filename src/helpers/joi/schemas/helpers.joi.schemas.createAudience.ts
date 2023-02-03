import Joi from "joi";

import { ISO3166CountryCode, Language } from "../../../ts/index.js";
import generateBaseSchema from "../helpers.joi.generateBaseSchema.js";
import { capitalizedWord, phone } from "../validators/index.js";

const US_ZIP_REG_EXP = /^\d{5}([-]?\d{4})?$/;
const BR_ZIP_REG_EXP = /^\d{5}[-]?\d{3}$/;

const joiBaseSchema = generateBaseSchema();

joiBaseSchema.body = Joi.object({
    name: Joi.string().trim().custom(capitalizedWord, "Capitalized Word validator").required(),
    contact: Joi.object({
        address1: Joi.string().trim().required(),
        address2: Joi.string().trim(),
        country: Joi.string().trim().valid(...Object.values(ISO3166CountryCode)).required(),
        zip: Joi.when("country", {
            switch: [
                { is: ISO3166CountryCode.United_States_of_America, then: Joi.string().trim().pattern(US_ZIP_REG_EXP, "US ZIP pattern").required() },
                { is: ISO3166CountryCode.Brazil, then: Joi.string().trim().pattern(BR_ZIP_REG_EXP, "Template Name pattern").required() },
            ],
            otherwise: Joi.string().trim().required(),
        }),
        state: Joi.string().trim().custom(capitalizedWord, "Capitalized Word validator").required(),
        city: Joi.string().trim().custom(capitalizedWord, "Capitalized Word validator").required(),
        phone: Joi.string().trim().custom(phone, "Phone validator"),
        company: Joi.string().trim().required(),
    }),
    permissionReminder: Joi.string().trim().required(),
    campaignDefaults: Joi.object({
        fromName: Joi.string().trim().required(),
        fromEmail: Joi.string().trim().email().required(),
        subject: Joi.string().trim().required(),
        language: Joi.string().trim().valid(...Object.values(Language)).required(),
    }),
    emailTypeOption: Joi.bool().required(),
    useArchiveBar: Joi.bool(),
    notifyOnSubscribe: Joi.string().trim().email(),
    notifyOnUnsubscribe: Joi.string().trim().email(),
    doubleOptin: Joi.bool(),
    marketingPermissions: Joi.bool(),
});

joiBaseSchema.path = Joi.object({
    audienceId: Joi.string().alphanum().trim().length(10).required(),
});

const updateAudienceSchema = Joi.object(joiBaseSchema);

export default updateAudienceSchema;
