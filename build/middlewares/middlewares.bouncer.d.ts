import Joi from "joi";
import { Bouncer, RequestParams } from "../ts/index.js";
declare function bouncer(schema: Joi.ObjectSchema<RequestParams>): Bouncer;
export default bouncer;
