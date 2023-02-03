import { StatusCodes } from "http-status-codes";

import { caseConverter } from "../../helpers/index.js";
import { IBuildPingMailchimp, IMailchimpHealthCheck, IPingMailchimpRequest, IPingMailchimpResponse } from "../../ts/index.js";

function buildPingMailchimp({
    mailchimpClient,
}: IBuildPingMailchimp) {
    return async function pingMailchimp(_request: IPingMailchimpRequest): Promise<IPingMailchimpResponse> {
        const _mailchimpHealthCheck = await mailchimpClient.ping();

        const mailchimpHealthCheck = caseConverter.toCamelCase<IMailchimpHealthCheck>(_mailchimpHealthCheck);

        return {
            statusCode: StatusCodes.OK,
            data: { mailchimpHealthCheck },
        };
    };
}

export default buildPingMailchimp;
