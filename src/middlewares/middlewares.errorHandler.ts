import Boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

function errorHandler(error: Error | Boom.Boom, _req: Request, res: Response, next: NextFunction): Response {
    if (res.headersSent) {
        next(error);
    }

    if (Boom.isBoom(error)) {
        return res.status(error.output.statusCode).json(error);
    }

    const boomError = Boom.boomify(error, {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Unexpected error",
    });

    return res.status(boomError.output.statusCode).json(boomError);
}

export default errorHandler;
