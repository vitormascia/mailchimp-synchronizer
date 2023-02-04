import { StatusCodes } from "http-status-codes";
import { caseConverter } from "../../helpers/index.js";
function buildPingMailchimp({ mailchimpClient, }) {
    return async function pingMailchimp() {
        const _mailchimpHealthCheck = await mailchimpClient.ping();
        const mailchimpHealthCheck = caseConverter.toCamelCase(_mailchimpHealthCheck);
        return {
            statusCode: StatusCodes.OK,
            data: { mailchimpHealthCheck },
        };
    };
}
export default buildPingMailchimp;
//# sourceMappingURL=use-cases.healthChecks.pingMailchimp.js.map