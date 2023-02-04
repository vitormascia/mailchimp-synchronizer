import { StatusCodes } from "http-status-codes";

import { caseConverter } from "../../helpers/index.js";
import { IBuildPingMailchimp, IMailchimpHealthCheck, IPingMailchimpResponse } from "../../ts/index.js";

function buildPingMailchimp({
    mailchimpClient,
}: IBuildPingMailchimp) {
    return async function pingMailchimp(): Promise<IPingMailchimpResponse> {
        const _mailchimpHealthCheck = await mailchimpClient.ping();

        const mailchimpHealthCheck = caseConverter.toCamelCase<IMailchimpHealthCheck>(_mailchimpHealthCheck);

        return {
            statusCode: StatusCodes.OK,
            data: { mailchimpHealthCheck },
        };
    };
}

export default buildPingMailchimp;
