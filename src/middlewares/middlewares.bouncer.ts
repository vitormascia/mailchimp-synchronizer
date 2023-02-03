import Boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

import { IRequestParams, TBouncer } from "../ts/index.js";

function bouncer(schema: Joi.ObjectSchema<IRequestParams>): TBouncer {
    return async function (req: Request, _res: Response, next: NextFunction): Promise<void> {
        try {
            const request = {
                body: req.body,
                path: req.params,
                query: req.query,
            };

            const validatedRequest = await schema.validateAsync(request, { allowUnknown: false, abortEarly: false });

            req.body = validatedRequest.body;
            req.params = validatedRequest.path;
            req.query = validatedRequest.query;

            next();
        } catch (error: any) {
            const err = Boom.boomify(error, {
                statusCode: StatusCodes.BAD_REQUEST,
                message: "Invalid request",
            });

            next(err);
        }
    };
}

export default bouncer;
