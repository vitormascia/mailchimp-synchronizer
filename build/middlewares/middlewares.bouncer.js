import Boom from "@hapi/boom";
import { StatusCodes } from "http-status-codes";
function bouncer(schema) {
    return async function (req, _res, next) {
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
        }
        catch (error) {
            const err = Boom.boomify(error, {
                statusCode: StatusCodes.BAD_REQUEST,
                message: "Invalid request",
            });
            next(err);
        }
    };
}
export default bouncer;
//# sourceMappingURL=middlewares.bouncer.js.map