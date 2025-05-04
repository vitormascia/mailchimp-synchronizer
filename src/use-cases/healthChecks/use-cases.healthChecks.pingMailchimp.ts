import { StatusCodes } from "http-status-codes";

import { caseConverter } from "../../helpers/index.js";
import { BuildPingMailchimp, MailchimpHealthCheck, PingMailchimpResponse } from "../../ts/index.js";

function buildPingMailchimp({
    mailchimpClient,
}: BuildPingMailchimp) {
    return async function pingMailchimp(): Promise<PingMailchimpResponse> {
        const _mailchimpHealthCheck = await mailchimpClient.ping();

        const mailchimpHealthCheck = caseConverter.toCamelCase<MailchimpHealthCheck>(_mailchimpHealthCheck as Record<string, any>);

        return {
            statusCode: StatusCodes.OK,
            data: { mailchimpHealthCheck },
        };
    };
}

export default buildPingMailchimp;
