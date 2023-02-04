import Boom from "@hapi/boom";
import { StatusCodes } from "http-status-codes";
import { logger } from "../app/index.js";
function errorHandler(error, _req, res, next) {
    if (res.headersSent) {
        logger.error("DELEGATING_ERROR_TO_EXPRESS_DEFAULT_ERROR_HANDLER", {
            data: { error },
        });
        next(error);
    }
    if (Boom.isBoom(error)) {
        logger.error("HANDLING_ERROR", {
            data: {
                boomified: false,
                error,
            },
        });
        return res.status(error.output.statusCode).json(error);
    }
    const boomError = Boom.boomify(error, {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Unexpected error",
    });
    logger.error("HANDLING_ERROR", {
        data: {
            boomified: true,
            error,
        },
    });
    return res.status(boomError.output.statusCode).json(boomError);
}
export default errorHandler;
//# sourceMappingURL=middlewares.errorHandler.js.map