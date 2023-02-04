import { v4 as uuid } from "uuid";
import { logger } from "../app/index.js";
function buildCallback(controller) {
    return async function (req, res, next) {
        try {
            const httpRequest = {
                body: req.body,
                path: req.params,
                query: req.query,
                method: req.method,
                url: {
                    protocol: req.protocol,
                    host: req.get("Host") ?? "N/A",
                    endpoint: req.originalUrl,
                },
                source: {
                    ip: req.ip,
                    userAgent: req.get("User-Agent") ?? "N/A",
                },
                headers: req.headers,
            };
            const requestId = uuid();
            logger.debug("INCOMING_HTTP_REQUEST", {
                data: { requestId, httpRequest },
            });
            const httpResponse = await controller(httpRequest);
            logger.debug("OUTGOING_HTTP_RESPONSE", {
                data: { requestId, httpResponse },
            });
            res.status(httpResponse.statusCode).json(httpResponse.data);
        }
        catch (error) {
            next(error);
        }
    };
}
export default buildCallback;
//# sourceMappingURL=middlewares.buildCallback.js.map