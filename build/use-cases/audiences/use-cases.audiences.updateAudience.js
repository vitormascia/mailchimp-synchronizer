import { StatusCodes } from "http-status-codes";
import { caseConverter } from "../../helpers/index.js";
function buildUpdateAudience({ mailchimpClient, }) {
    return async function updateAudience(audienceId, audience) {
        const mailchimpRequest = caseConverter.toSnakeCase(audience);
        const _updatedAudience = await mailchimpClient.updateAudience(audienceId, mailchimpRequest);
        const updatedAudience = caseConverter.toCamelCase(_updatedAudience);
        return {
            statusCode: StatusCodes.OK,
            data: { updatedAudience },
        };
    };
}
export default buildUpdateAudience;
//# sourceMappingURL=use-cases.audiences.updateAudience.js.map