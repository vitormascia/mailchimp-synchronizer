import Boom from "@hapi/boom";
import _mailchimpClient from "@mailchimp/mailchimp_marketing";
import { config, logger } from "../app/index.js";
const { MAILCHIMP } = config;
class MailchimpClient {
    config;
    client;
    constructor() {
        this.config = {
            apiKey: MAILCHIMP.API.KEY,
            server: MAILCHIMP.SERVER_PREFIX,
        };
        _mailchimpClient.setConfig(this.config);
        this.client = _mailchimpClient;
    }
    logSuccess(response, method) {
        logger.info("HTTP_REQUEST_SUCCESS", {
            data: {
                client: this.constructor.name,
                method,
                response,
            },
        });
    }
    logError(error, method) {
        logger.error("HTTP_REQUEST_ERROR", {
            data: {
                client: this.constructor.name,
                method,
                error: {
                    status: error.status,
                    message: error.message,
                    mailchimpDetails: JSON.parse(error.response.text),
                },
            },
        });
    }
    async ping() {
        try {
            const response = await _mailchimpClient.ping.get();
            this.logSuccess(response, this.ping.name);
            return response;
        }
        catch (error) {
            this.logError(error, this.ping.name);
            throw Boom.serverUnavailable("Mailchimp API is down", {
                mailchimpDetails: JSON.parse(error.response.text),
            });
        }
    }
    async batchAudienceMembers(audienceId, request, options = { skip_merge_validation: false, skip_duplicate_check: false }) {
        try {
            const response = await _mailchimpClient.lists.batchListMembers(audienceId, request, options);
            this.logSuccess(response, this.ping.name);
            return response;
        }
        catch (error) {
            this.logError(error, this.ping.name);
            throw Boom.badImplementation("Unexpected Mailchimp API condition prevented it from fulfilling the request", {
                mailchimpDetails: JSON.parse(error.response.text),
            });
        }
    }
    async updateAudience(audienceId, request) {
        try {
            const response = await _mailchimpClient.lists.updateList(audienceId, request);
            this.logSuccess(response, this.ping.name);
            return response;
        }
        catch (error) {
            this.logError(error, this.ping.name);
            throw Boom.badImplementation("Unexpected Mailchimp API condition prevented it from fulfilling the request", {
                mailchimpDetails: JSON.parse(error.response.text),
            });
        }
    }
}
const mailchimpClient = new MailchimpClient();
export default mailchimpClient;
export { MailchimpClient };
//# sourceMappingURL=clients.mailchimp.js.map