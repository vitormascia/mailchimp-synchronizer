import { IUpdateListRequest } from "@mailchimp/mailchimp_marketing";
import { StatusCodes } from "http-status-codes";

import { caseConverter } from "../../helpers/index.js";
import { IBuildUpdateAudience, IUpdateAudienceRequestBody, IUpdateAudienceResponse, IUpdatedAudience } from "../../ts/index.js";

function buildUpdateAudience({
    mailchimpClient,
}: IBuildUpdateAudience) {
    return async function updateAudience(audienceId: string, audience: IUpdateAudienceRequestBody): Promise<IUpdateAudienceResponse> {
        const mailchimpRequest = caseConverter.toSnakeCase<IUpdateListRequest>(audience);

        const _updatedAudience = await mailchimpClient.updateAudience(audienceId, mailchimpRequest);

        const updatedAudience = caseConverter.toCamelCase<IUpdatedAudience>(_updatedAudience);

        return {
            statusCode: StatusCodes.OK,
            data: { updatedAudience },
        };
    };
}

export default buildUpdateAudience;
