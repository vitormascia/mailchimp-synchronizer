import Joi from "joi";
import { IRequestParams, TBouncer } from "../ts/index.js";
declare function bouncer(schema: Joi.ObjectSchema<IRequestParams>): TBouncer;
export default bouncer;
