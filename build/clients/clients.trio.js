import Boom from "@hapi/boom";
import axios from "axios";
import { config, logger } from "../app/index.js";
const { TRIO } = config;
class TrioClient {
    config;
    client;
    constructor() {
        this.config = {
            baseURL: TRIO.API.BASE_URL,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
            },
        };
        this.client = axios.create(this.config);
    }
    logSuccess(response, method) {
        logger.info("HTTP_REQUEST_SUCCESS", {
            data: {
                client: this.constructor.name,
                method,
                response: response.data,
                status: {
                    code: response.status,
                    text: response.statusText,
                },
            },
        });
    }
    logError(error, method) {
        logger.error("HTTP_REQUEST_ERROR", {
            data: {
                client: this.constructor.name,
                method,
                request: error.request,
                error: {
                    message: error.message,
                    code: error.code,
                    cause: error.cause,
                    status: error.status,
                    data: error.response?.data,
                },
            },
        });
    }
    async getContacts() {
        try {
            const response = await this.client.get("/contacts");
            this.logSuccess(response, this.getContacts.name);
            return response.data;
        }
        catch (error) {
            const _error = error;
            this.logError(_error, this.getContacts.name);
            throw Boom.badImplementation("Unexpected Trio's Mock API condition prevented it from fulfilling the request", {
                ...error.response.data,
            });
        }
    }
}
const trioClient = new TrioClient();
export default trioClient;
export { TrioClient };
//# sourceMappingURL=clients.trio.js.map