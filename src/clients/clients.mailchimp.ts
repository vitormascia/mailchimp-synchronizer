import Boom from "@hapi/boom";
import _mailchimpClient, { IBatchListMembersOptions, IBatchListMembersRequest, IBatchListMembersResponse, IMailchimpConfig, IPingResponse, IUpdateListRequest, IUpdateListResponse } from "@mailchimp/mailchimp_marketing";

import { config, logger } from "../app/index.js";
import { AnyObject, Client, MailchimpClient as TMailchimpClient } from "../ts/index.js";

const { MAILCHIMP } = config;

class MailchimpClient implements Client<IMailchimpConfig, TMailchimpClient> {
    readonly config: IMailchimpConfig;
    readonly client: TMailchimpClient;

    constructor() {
        this.config = {
            apiKey: MAILCHIMP.API.KEY,
            server: MAILCHIMP.SERVER_PREFIX,
        };
        _mailchimpClient.setConfig(this.config);
        this.client = _mailchimpClient;
    }

    private logSuccess(response: AnyObject, method: string): void {
        logger.info("HTTP_REQUEST_SUCCESS", {
            data: {
                client: this.constructor.name,
                method,
                response,
            },
        });
    }

    private logError(error: any, method: string): void {
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

    public async ping(): Promise<IPingResponse> {
        try {
            const response = await _mailchimpClient.ping.get();

            this.logSuccess(response, this.ping.name);

            return response;
        } catch (error: any) {
            this.logError(error, this.ping.name);

            throw Boom.serverUnavailable("Mailchimp API is down", {
                mailchimpDetails: JSON.parse(error.response.text),
            });
        }
    }

    public async batchAudienceMembers(
        audienceId: string,
        request: IBatchListMembersRequest,
        options: IBatchListMembersOptions = { skip_merge_validation: false, skip_duplicate_check: false },
    ): Promise<IBatchListMembersResponse> {
        try {
            const response = await _mailchimpClient.lists.batchListMembers(audienceId, request, options);

            this.logSuccess(response, this.ping.name);

            return response;
        } catch (error: any) {
            this.logError(error, this.ping.name);

            throw Boom.badImplementation("Unexpected Mailchimp API condition prevented it from fulfilling the request", {
                mailchimpDetails: JSON.parse(error.response.text),
            });
        }
    }

    public async updateAudience(
        audienceId: string,
        request: IUpdateListRequest,
    ): Promise<IUpdateListResponse> {
        try {
            const response = await _mailchimpClient.lists.updateList(audienceId, request);

            this.logSuccess(response, this.ping.name);

            return response;
        } catch (error: any) {
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
